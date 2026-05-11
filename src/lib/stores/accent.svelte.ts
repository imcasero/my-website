const isBrowser = typeof window !== "undefined";

export type ThemeName =
  | "ocean"
  | "dracula"
  | "monokai"
  | "nord"
  | "solarized"
  | "catppuccin"
  | "gruvbox"
  | "rose-pine";

export type ThemePreset = {
  label: string;
  hue: number;
  promptHue: number;
  successHue: number;
  warningHue: number;
  swatches: [string, string, string];
};

export const THEME_PRESETS: Record<ThemeName, ThemePreset> = {
  ocean: {
    label: "Ocean",
    hue: 210,
    promptHue: 210,
    successHue: 190,
    warningHue: 85,
    swatches: [
      "oklch(0.65 0.2 210)",
      "oklch(0.7 0.18 190)",
      "oklch(0.75 0.18 85)",
    ],
  },
  dracula: {
    label: "Dracula",
    hue: 280,
    promptHue: 280,
    successHue: 135,
    warningHue: 60,
    swatches: [
      "oklch(0.65 0.22 280)",
      "oklch(0.7 0.22 330)",
      "oklch(0.7 0.2 135)",
    ],
  },
  monokai: {
    label: "Monokai",
    hue: 55,
    promptHue: 55,
    successHue: 130,
    warningHue: 330,
    swatches: [
      "oklch(0.75 0.2 55)",
      "oklch(0.7 0.2 130)",
      "oklch(0.7 0.22 330)",
    ],
  },
  nord: {
    label: "Nord",
    hue: 218,
    promptHue: 218,
    successHue: 100,
    warningHue: 40,
    swatches: [
      "oklch(0.62 0.14 218)",
      "oklch(0.72 0.12 100)",
      "oklch(0.75 0.14 40)",
    ],
  },
  solarized: {
    label: "Solarized",
    hue: 195,
    promptHue: 195,
    successHue: 145,
    warningHue: 45,
    swatches: [
      "oklch(0.62 0.16 195)",
      "oklch(0.68 0.15 145)",
      "oklch(0.78 0.18 45)",
    ],
  },
  catppuccin: {
    label: "Catppuccin",
    hue: 302,
    promptHue: 302,
    successHue: 155,
    warningHue: 35,
    swatches: [
      "oklch(0.62 0.18 302)",
      "oklch(0.72 0.16 155)",
      "oklch(0.78 0.18 35)",
    ],
  },
  gruvbox: {
    label: "Gruvbox",
    hue: 35,
    promptHue: 85,
    successHue: 130,
    warningHue: 30,
    swatches: [
      "oklch(0.72 0.18 35)",
      "oklch(0.75 0.15 85)",
      "oklch(0.68 0.16 130)",
    ],
  },
  "rose-pine": {
    label: "Rose Pine",
    hue: 340,
    promptHue: 340,
    successHue: 145,
    warningHue: 40,
    swatches: [
      "oklch(0.62 0.18 340)",
      "oklch(0.68 0.16 145)",
      "oklch(0.75 0.16 40)",
    ],
  },
};

const DEFAULT_THEME: ThemeName = "ocean";

const getInitialTheme = (): ThemeName => {
  if (!isBrowser) return DEFAULT_THEME;
  const stored = localStorage.getItem("accent") as ThemeName | null;
  return stored && stored in THEME_PRESETS ? stored : DEFAULT_THEME;
};

const applyTheme = (name: ThemeName) => {
  if (!isBrowser) return;
  const preset = THEME_PRESETS[name];
  const root = document.documentElement;
  root.style.setProperty("--accent-h", String(preset.hue));
  root.style.setProperty("--prompt-h", String(preset.promptHue));
  root.style.setProperty("--success-h", String(preset.successHue));
  root.style.setProperty("--warning-h", String(preset.warningHue));
  localStorage.setItem("accent", name);
};

function createAccentState() {
  let current = $state<ThemeName>(getInitialTheme());

  if (isBrowser) {
    applyTheme(current);
  }

  return {
    get current() {
      return current;
    },
    set: (name: ThemeName) => {
      current = name;
      applyTheme(name);
    },
  };
}

export const accent = createAccentState();

// Backward-compat aliases
export type AccentName = ThemeName;
export const ACCENT_PRESETS = THEME_PRESETS;
