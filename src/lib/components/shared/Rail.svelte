<script lang="ts">
    import { onMount } from "svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
    import ModeToggle from "./ModeToggle.svelte";
    import AccentPicker from "./AccentPicker.svelte";
    import { currentMode } from "$lib/stores/mode.svelte";

    const CMD = "whoami";

    const nav = [
        { id: "about", label: "about" },
        { id: "experience", label: "experience" },
        { id: "projects", label: "projects" },
        { id: "tech-stack", label: "tech" },
        { id: "contact", label: "contact" },
    ];

    const socials = [
        {
            label: "GitHub",
            href: "https://github.com/imcasero",
            filled: true,
            d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z",
        },
        {
            label: "LinkedIn",
            href: "https://linkedin.com/in/imcasero",
            filled: true,
            d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.65h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.77 2.64 4.77 6.08V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21H9z",
        },
        {
            label: "Email",
            href: "mailto:diegocaserosmr@gmail.com",
            filled: false,
            d: "M3 6.5h18v11H3zM3.5 7.2l8.5 5.8 8.5-5.8",
        },
    ];

    const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let typed = $state(reduced ? CMD : "");
    let step = $state(reduced ? 4 : 0);
    let active = $state("");

    /* A clicked nav link wins over the scroll-spy until the visitor scrolls
       on their own again: a section near the page bottom can never reach the
       reading line, so the spy would otherwise snap the marker straight back
       to whichever section owns that final scroll position. */
    let pinned: string | null = null;

    function pin(id: string) {
        pinned = id;
        active = id;
    }

    let isStatic = $derived(currentMode.current === "static");

    /* Boot sequence: type the command line only — never the display name —
       so a 3.25rem string never reflows mid-animation. */
    onMount(() => {
        if (reduced) return;

        let i = 0;
        const timers: ReturnType<typeof setTimeout>[] = [];
        const tick = setInterval(() => {
            i += 1;
            typed = CMD.slice(0, i);
            if (i >= CMD.length) {
                clearInterval(tick);
                [1, 2, 3, 4].forEach((s, k) => {
                    timers.push(setTimeout(() => (step = s), 90 * k));
                });
            }
        }, 55);

        return () => {
            clearInterval(tick);
            timers.forEach(clearTimeout);
        };
    });

    /* Scroll-spy. Re-registers when the view mode flips, since the
       sections only exist in static mode.

       Position-based rather than IntersectionObserver: the last sections
       can never reach a fixed observer band because the page runs out of
       scroll, which left the marker stuck on an earlier section. */
    $effect(() => {
        if (!isStatic) {
            active = "";
            return;
        }

        const sections = nav
            .map((n) => ({ id: n.id, el: document.getElementById(n.id) }))
            .filter(
                (n): n is { id: string; el: HTMLElement } => n.el !== null,
            );

        if (sections.length === 0) return;

        let frame = 0;

        const update = () => {
            frame = 0;

            if (pinned) {
                active = pinned;
                return;
            }

            const viewport = window.innerHeight;
            const line = viewport * 0.3;
            const maxScroll = Math.max(
                0,
                document.documentElement.scrollHeight - viewport,
            );
            const y = window.scrollY;

            /* Activation point of a section: the scroll offset at which
               its top crosses the reading line. */
            const points = sections.map(
                (s) => s.el.getBoundingClientRect().top + y - line,
            );

            /* Near the end the page simply runs out of scroll: the last
               sections' points land past maxScroll, or crowd into its final
               pixels, so the marker never reached them. Cap each one so it
               owns a slice of the tail, then restore the ordering. */
            if (maxScroll > viewport) {
                const slice = viewport * 0.25;
                for (let i = points.length - 1; i > 0; i--) {
                    const cap =
                        maxScroll - (points.length - 1 - i + 0.5) * slice;
                    points[i] = Math.min(points[i], cap);
                }
                for (let i = 1; i < points.length; i++) {
                    points[i] = Math.max(points[i], points[i - 1]);
                }
            }

            let current = sections[0].id;
            for (let i = 0; i < sections.length; i++) {
                if (y >= points[i] - 1) current = sections[i].id;
            }

            active = current;
        };

        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        /* Wheel, a pointer press (scrollbar drags included) and the
           scrolling keys mean the visitor took over — anything else,
           including the smooth scroll a nav click starts, leaves the pin
           in place. A press on a nav link re-pins right after, since
           pointerdown lands before click. */
        const SCROLL_KEYS = new Set([
            "ArrowUp",
            "ArrowDown",
            "PageUp",
            "PageDown",
            "Home",
            "End",
            " ",
        ]);

        const release = () => {
            if (!pinned) return;
            pinned = null;
            schedule();
        };

        const onKeydown = (e: KeyboardEvent) => {
            if (SCROLL_KEYS.has(e.key)) release();
        };

        /* A deep link lands mid-page for the same reason a click does —
           on load, and on browser history moves between anchors. */
        const pinHash = () => {
            const hash = location.hash.slice(1);
            if (sections.some((s) => s.id === hash)) pin(hash);
        };

        pinHash();

        update();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        window.addEventListener("wheel", release, { passive: true });
        window.addEventListener("pointerdown", release, { passive: true });
        window.addEventListener("keydown", onKeydown);
        window.addEventListener("hashchange", pinHash);

        return () => {
            if (frame) cancelAnimationFrame(frame);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            window.removeEventListener("wheel", release);
            window.removeEventListener("pointerdown", release);
            window.removeEventListener("keydown", onKeydown);
            window.removeEventListener("hashchange", pinHash);
        };
    });
</script>

<aside class="rail" class:booted={step > 0}>
    <div class="identity">
        <p class="cmd" aria-hidden="true">
            <span class="dollar">$</span><span class="typed">{typed}</span><span
                class="caret">_</span
            >
        </p>

        <h1 class="name" class:in={step >= 1}>Diego<br />Casero</h1>

        <p class="role" class:in={step >= 2}>Software Developer</p>

        <p class="status" class:in={step >= 2}>
            <span class="pulse" aria-hidden="true"></span>
            Building at CaixaBankTech
        </p>
    </div>

    {#if isStatic}
        <nav class="nav" class:in={step >= 3} aria-label="Sections">
            {#each nav as item}
                <a
                    href="#{item.id}"
                    class="nav-link"
                    class:active={active === item.id}
                    aria-current={active === item.id ? "true" : undefined}
                    onclick={() => pin(item.id)}
                >
                    <span class="marker" aria-hidden="true">
                        {active === item.id ? "▸" : ""}
                    </span>
                    {item.label}
                </a>
            {/each}
        </nav>
    {/if}

    <div class="tail" class:in={step >= 4}>
        <ul class="socials">
            {#each socials as s}
                <li>
                    <a
                        href={s.href}
                        target={s.href.startsWith("mailto:") ? null : "_blank"}
                        rel="noopener noreferrer"
                        class="social"
                        aria-label={s.label}
                        title={s.label}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill={s.filled ? "currentColor" : "none"}
                            stroke={s.filled ? "none" : "currentColor"}
                            stroke-width={s.filled ? 0 : 1.6}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d={s.d} />
                        </svg>
                    </a>
                </li>
            {/each}
        </ul>

        <div class="controls">
            <ModeToggle />
            <div class="controls-row">
                <ThemeToggle />
                <AccentPicker />
            </div>
        </div>
    </div>
</aside>

<style>
    .rail {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: var(--gutter) 0;
    }

    /* ---- Identity ---- */
    .cmd {
        font-family: var(--font-mono);
        font-size: var(--text-2xs);
        letter-spacing: 0.04em;
        color: var(--role-meta);
        margin-bottom: 0.9rem;
        min-height: 1em;
    }

    .dollar {
        color: var(--role-prompt);
        font-weight: 700;
        margin-right: 0.45em;
    }

    .caret {
        color: var(--role-prompt);
        animation: cursor-blink 1s step-end infinite;
    }

    .name {
        font-family: var(--font-mono);
        font-size: var(--text-display);
        font-weight: 700;
        line-height: 0.94;
        letter-spacing: -0.045em;
        color: var(--foreground);
        text-transform: uppercase;
    }

    .role {
        margin-top: 0.85rem;
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--primary);
        letter-spacing: 0.01em;
    }

    .status {
        margin-top: 0.55rem;
        margin-left: 0.35rem;
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        font-family: var(--font-mono);
        font-size: var(--text-2xs);
        color: var(--role-meta);
        letter-spacing: 0.02em;
    }

    .pulse {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--terminal-success);
        box-shadow: 0 0 0 3px
            color-mix(in oklch, var(--terminal-success) 20%, transparent);
        flex-shrink: 0;
    }

    /* ---- Nav ---- */
    .nav {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        border-top: 1px solid var(--hairline);
        border-bottom: 1px solid var(--hairline);
        padding: 1rem 0;
    }

    .nav-link {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--role-meta);
        text-decoration: none;
        padding: 0.3rem 0;
        transition:
            color 0.18s ease,
            transform 0.18s ease;
    }

    .marker {
        width: 0.75em;
        color: var(--role-prompt);
        flex-shrink: 0;
    }

    .nav-link:hover {
        color: var(--foreground);
    }

    .nav-link.active {
        color: var(--foreground);
        font-weight: 700;
    }

    .nav-link:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
        border-radius: 2px;
    }

    /* ---- Tail ---- */
    .tail {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        margin-top: auto;
    }

    .socials {
        display: flex;
        gap: 0.4rem;
    }

    .social {
        display: grid;
        place-items: center;
        width: 32px;
        height: 32px;
        border: 1px solid var(--border-interactive);
        border-radius: var(--radius);
        color: var(--role-meta);
        transition:
            color 0.18s ease,
            border-color 0.18s ease,
            transform 0.18s ease;
    }

    .social svg {
        width: 15px;
        height: 15px;
    }

    .social:hover {
        color: var(--primary);
        border-color: color-mix(in oklch, var(--primary) 45%, transparent);
        transform: translateY(-1px);
    }

    .social:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
    }

    .controls {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0.4rem;
    }

    .controls-row {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    /* ---- Boot reveal ---- */
    .name,
    .role,
    .status,
    .nav,
    .tail {
        opacity: 0;
        transform: translateY(8px);
        transition:
            opacity 0.45s ease-out,
            transform 0.45s ease-out;
    }

    .in {
        opacity: 1;
        transform: none;
    }

    /* ---- Desktop: sticky full-height rail ---- */
    @media (min-width: 1024px) {
        .rail {
            position: sticky;
            top: 0;
            height: 100vh;
            padding: clamp(2rem, 5vh, 3.5rem) 0 var(--gutter);
            overflow-y: auto;
        }
    }

    /* ---- Below 1024px: block header, horizontal nav ---- */
    @media (max-width: 1023px) {
        .rail {
            gap: 1.5rem;
            padding-bottom: 0.5rem;
        }

        .nav {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.25rem 1rem;
        }

        .tail {
            /* The shell is min-height:100vh, so the rail's grid row stretches;
               without this the auto margin pushes the tail to the fold. */
            margin-top: 0;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .controls {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        .controls-row {
            flex: 0 1 auto;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .name,
        .role,
        .status,
        .nav,
        .tail {
            opacity: 1;
            transform: none;
        }
    }
</style>
