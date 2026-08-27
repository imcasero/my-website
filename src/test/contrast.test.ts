import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { THEME_PRESETS, type ThemeName } from "$lib/stores/accent.svelte";

/**
 * Accessibility guard for the themeable palette.
 *
 * Every colour in app.css is generated from seven hue/chroma knobs that the
 * accent store rewrites at runtime, which means there are 9 presets x 2 themes
 * = 18 distinct palettes. Eyeballing them is not feasible, so this test parses
 * app.css directly (rather than duplicating the values) and checks the pairs
 * that carry real text.
 */

// Vitest runs from the project root.
const CSS = readFileSync(resolve(process.cwd(), "src/app.css"), "utf8");

function block(selector: string): string {
  const start = CSS.indexOf(selector);
  if (start === -1) throw new Error(`Selector not found: ${selector}`);
  const open = CSS.indexOf("{", start);
  const close = CSS.indexOf("\n}", open);
  return CSS.slice(open, close);
}

const BLOCKS = {
  light: block(':root,\n[data-theme="light"] {'),
  dark: block('[data-theme="dark"] {'),
};

interface Knobs {
  "--accent-h": number;
  "--prompt-h": number;
  "--success-h": number;
  "--warning-h": number;
  "--prompt-c": number;
  "--success-c": number;
  "--warning-c": number;
}

function knobsFor(preset: (typeof THEME_PRESETS)[ThemeName]): Knobs {
  return {
    "--accent-h": preset.hue,
    "--prompt-h": preset.promptHue,
    "--success-h": preset.successHue,
    "--warning-h": preset.warningHue,
    "--prompt-c": preset.promptChroma,
    "--success-c": preset.successChroma,
    "--warning-c": preset.warningChroma,
  };
}

/** Resolves one component of an oklch() triple against the preset knobs. */
function component(raw: string, knobs: Knobs): number {
  const text = raw.trim();

  const direct = Number(text);
  if (!Number.isNaN(direct)) return direct;

  const calc = text.match(/^calc\(var\((--[\w-]+)\)\s*\*\s*([\d.]+)\)$/);
  if (calc) return (knobs[calc[1] as keyof Knobs] ?? 0) * Number(calc[2]);

  const plain = text.match(/^var\((--[\w-]+)\)$/);
  if (plain) return knobs[plain[1] as keyof Knobs] ?? 0;

  throw new Error(`Cannot resolve oklch component: ${raw}`);
}

function token(theme: "light" | "dark", name: string, knobs: Knobs) {
  const source = BLOCKS[theme];
  const declaration = source.indexOf(`${name}: oklch(`);
  if (declaration === -1) {
    throw new Error(`Token ${name} not found in ${theme} block`);
  }

  // Scan to the matching close paren; values nest several var()/calc() calls.
  const open = source.indexOf("(", declaration + name.length + 2);
  let depth = 0;
  let close = open;
  for (let i = open; i < source.length; i++) {
    if (source[i] === "(") depth++;
    if (source[i] === ")") {
      depth--;
      if (depth === 0) {
        close = i;
        break;
      }
    }
  }

  const value = source.slice(open + 1, close);

  // Split on top-level spaces only.
  const parts: string[] = [];
  let current = "";
  depth = 0;
  for (const char of value) {
    if (char === "(") depth++;
    if (char === ")") depth--;
    if (char === " " && depth === 0) {
      if (current) parts.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  if (current) parts.push(current);

  const [l, c, h] = parts;
  return oklchToRgb(component(l, knobs), component(c, knobs), component(h, knobs));
}

/** OKLCH -> gamma-encoded sRGB, clamped to gamut. */
function oklchToRgb(L: number, C: number, H: number): [number, number, number] {
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad);
  const b = C * Math.sin(hRad);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];

  return lin.map((v) => {
    const encoded = v <= 0.0031308 ? 12.92 * v : 1.055 * Math.abs(v) ** (1 / 2.4) - 0.055;
    return Math.min(1, Math.max(0, encoded));
  }) as [number, number, number];
}

function luminance([r, g, b]: [number, number, number]): number {
  const lin = [r, g, b].map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function contrast(fg: [number, number, number], bg: [number, number, number]): number {
  const a = luminance(fg);
  const b = luminance(bg);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * A background to measure against: either an opaque token, or a translucent
 * `color-mix(in oklch, <tint> <amount>%, transparent)` composited over one.
 * Several surfaces in the UI are tinted chips, and a tint moves the ratio
 * enough to flip a pass into a fail.
 */
type Surface = string | { tint: string; amount: number; over: string };

/** Resolves a Surface to the opaque colour the eye actually receives. */
function surface(theme: "light" | "dark", spec: Surface, knobs: Knobs): [number, number, number] {
  if (typeof spec === "string") return token(theme, spec, knobs);

  const tint = token(theme, spec.tint, knobs);
  const base = token(theme, spec.over, knobs);
  return tint.map((channel, i) => channel * spec.amount + base[i] * (1 - spec.amount)) as [
    number,
    number,
    number,
  ];
}

function describeSurface(spec: Surface): string {
  return typeof spec === "string" ? spec : `${spec.tint} ${spec.amount * 100}% over ${spec.over}`;
}

/**
 * [foreground token, background surface, minimum ratio, description]
 *
 * 4.5 is AA for normal text; 3 is AA for the visible boundary of a control
 * or a focus indicator (1.4.11). Purely decorative rules (--border,
 * --hairline) are deliberately absent — WCAG does not hold them to a ratio.
 */
const PAIRS: [string, Surface, number, string][] = [
  // Page and card surfaces.
  ["--foreground", "--background", 4.5, "body text"],
  ["--muted-foreground", "--background", 4.5, "muted text"],
  ["--primary", "--background", 4.5, "role / company / links"],
  ["--foreground", "--card", 4.5, "card body text"],
  ["--muted-foreground", "--card", 4.5, "card muted text"],
  ["--primary-foreground", "--primary", 4.5, "primary button label"],

  // Terminal body.
  ["--terminal-text", "--terminal-bg", 4.5, "terminal body"],
  ["--terminal-prompt", "--terminal-bg", 4.5, "terminal prompt"],
  ["--terminal-comment", "--terminal-bg", 4.5, "terminal comment"],
  ["--terminal-success", "--terminal-bg", 4.5, "terminal success"],
  ["--terminal-warning", "--terminal-bg", 4.5, "terminal warning"],
  ["--terminal-error", "--terminal-bg", 4.5, "terminal error"],

  // Terminal chrome sits on --sunken, not --terminal-bg.
  ["--terminal-comment", "--sunken", 4.5, "chrome title and separators"],
  ["--terminal-prompt", "--sunken", 4.5, "chrome user"],
  ["--terminal-success", "--sunken", 4.5, "chrome host"],
  ["--terminal-warning", "--sunken", 4.5, "chrome path"],
  ["--muted-foreground", "--sunken", 4.5, "mode toggle segment, project host"],
  [
    "--terminal-prompt",
    { tint: "--terminal-prompt", amount: 0.14, over: "--sunken" },
    4.5,
    "shell tag on tinted chip",
  ],

  // Tinted chips inside the terminal body.
  [
    "--terminal-prompt",
    { tint: "--terminal-prompt", amount: 0.1, over: "--terminal-bg" },
    4.5,
    "suggestion chip",
  ],
  ["--terminal-bg", "--terminal-prompt", 4.5, "suggestion chip, hovered"],

  // `cat` / `sh` re-render the static components inside .terminal-render, so
  // static tokens land on --terminal-bg rather than the surface they were
  // tuned against.
  ["--foreground", "--terminal-bg", 4.5, "static body text in terminal"],
  ["--muted-foreground", "--terminal-bg", 4.5, "static muted text in terminal"],
  ["--primary", "--terminal-bg", 4.5, "static primary text in terminal"],
  [
    "--muted-foreground",
    { tint: "--foreground", amount: 0.05, over: "--terminal-bg" },
    4.5,
    "chip in terminal",
  ],

  // Accent picker dropdown.
  ["--muted-foreground", "--popover", 4.5, "dropdown header"],
  ["--foreground", "--popover", 4.5, "dropdown option"],
  [
    "--primary",
    { tint: "--primary", amount: 0.12, over: "--popover" },
    4.5,
    "dropdown option, selected",
  ],

  // Tinted chips in the static view.
  [
    "--muted-foreground",
    { tint: "--foreground", amount: 0.05, over: "--card" },
    4.5,
    "chip on card",
  ],
  [
    "--muted-foreground",
    { tint: "--foreground", amount: 0.05, over: "--background" },
    4.5,
    "chip on page",
  ],
  [
    "--foreground",
    { tint: "--foreground", amount: 0.08, over: "--background" },
    4.5,
    "inline term highlight",
  ],

  // Non-text: control boundaries and focus indicators (1.4.11).
  ["--border-interactive", "--background", 3, "control border on page"],
  ["--border-interactive", "--card", 3, "control border on card"],
  ["--border-interactive", "--sunken", 3, "control border on sunken"],
  ["--ring", "--background", 3, "focus ring on page"],
  ["--ring", "--card", 3, "focus ring on card"],
  ["--ring", "--popover", 3, "focus ring in dropdown"],
];

const presetNames = Object.keys(THEME_PRESETS) as ThemeName[];

describe("palette contrast", () => {
  for (const themeName of ["light", "dark"] as const) {
    describe(themeName, () => {
      for (const presetName of presetNames) {
        const knobs = knobsFor(THEME_PRESETS[presetName]);

        for (const [fg, bg, min, label] of PAIRS) {
          it(`${presetName}: ${label} meets ${min}:1`, () => {
            const ratio = contrast(token(themeName, fg, knobs), surface(themeName, bg, knobs));
            expect(
              Number(ratio.toFixed(2)),
              `${fg} on ${describeSurface(bg)} in ${themeName}/${presetName}`,
            ).toBeGreaterThanOrEqual(min);
          });
        }
      }
    });
  }
});
