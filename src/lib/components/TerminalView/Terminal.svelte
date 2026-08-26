<script lang="ts">
    import { terminal } from "$lib/stores/terminal.svelte";
    import { executeCommand, BANNER_ART, BANNER_TEXT } from "$lib/terminal/commands";
    import TerminalInput from "./TerminalInput.svelte";
    import TerminalOutput from "./TerminalOutput.svelte";
    import { onMount } from "svelte";

    const SUGGESTIONS = [
        "about",
        "experience",
        "projects",
        "tech",
        "contact",
        "help",
    ];

    let terminalContainer: HTMLDivElement;
    let inputRef = $state<{ focus: () => void } | null>(null);

    function scrollToBottom() {
        requestAnimationFrame(() => {
            if (terminalContainer) {
                terminalContainer.scrollTop = terminalContainer.scrollHeight;
            }
        });
    }

    function handleCommand(command: string) {
        terminal.addLine({ type: "command", content: command });
        terminal.addCommand(command);

        const result = executeCommand(command);

        if (result.content || result.component) {
            terminal.addLine({
                type: result.type,
                content: result.content,
                component: result.component,
            });
        }

        scrollToBottom();
    }

    function runSuggestion(command: string) {
        handleCommand(command);
        inputRef?.focus();
    }

    onMount(() => {
        if (terminal.initialized) return;

        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        terminal.addLine({ type: "text", content: BANNER_ART });
        terminal.setInitialized(true);

        if (reduced) {
            terminal.addLine({ type: "text", content: BANNER_TEXT });
            return;
        }

        terminal.addLine({ type: "text", content: "" });

        let i = 0;
        const tick = setInterval(() => {
            i += 1;
            terminal.updateLastLine(BANNER_TEXT.slice(0, i));
            if (i >= BANNER_TEXT.length) clearInterval(tick);
        }, 18);

        return () => clearInterval(tick);
    });
</script>

<div class="terminal-wrapper">
    <div class="terminal-chrome">
        <div class="traffic-lights" aria-hidden="true">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
        </div>
        <div class="terminal-title">
            <span class="shell-user">diego</span><span class="shell-sep">@</span
            ><span class="shell-host">imcasero.dev</span><span class="shell-sep"
            >
                —
            </span><span class="shell-path">~</span>
        </div>
        <div class="chrome-right">
            <span class="shell-tag">zsh</span>
        </div>
    </div>

    <div class="terminal-container terminal-body">
        <div
            bind:this={terminalContainer}
            class="terminal-scroll scroll-area"
            role="log"
            aria-live="polite"
            aria-label="Terminal output"
        >
            <TerminalOutput
                lines={terminal.history}
                currentPath={terminal.currentPath}
            />
        </div>

        <div class="suggestions">
            <span class="hint" aria-hidden="true">try</span>
            {#each SUGGESTIONS as suggestion}
                <button
                    type="button"
                    class="suggestion"
                    onclick={() => runSuggestion(suggestion)}
                >
                    {suggestion}
                </button>
            {/each}
        </div>

        <TerminalInput
            bind:this={inputRef}
            currentPath={terminal.currentPath}
            onSubmit={handleCommand}
        />
    </div>
</div>

<style>
    .terminal-wrapper {
        font-family: var(--font-mono);
        width: 100%;
    }

    .terminal-chrome {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0 12px;
        height: 34px;
        background: var(--sunken);
        border: 1px solid var(--border);
        border-bottom: none;
        border-radius: 6px 6px 0 0;
    }

    .traffic-lights {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-shrink: 0;
    }

    .dot {
        display: inline-block;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .dot-red {
        background: #ff5f57;
    }
    .dot-yellow {
        background: #ffbd2e;
    }
    .dot-green {
        background: #28c840;
    }

    .terminal-title {
        font-size: 11px;
        letter-spacing: 0.01em;
        color: var(--terminal-comment);
        user-select: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .shell-user {
        color: var(--terminal-prompt);
        font-weight: 700;
    }
    .shell-host {
        color: var(--terminal-success);
        font-weight: 600;
    }
    .shell-sep {
        color: var(--terminal-comment);
    }
    .shell-path {
        color: var(--terminal-warning);
    }

    .chrome-right {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .shell-tag {
        font-size: 10px;
        letter-spacing: 0.08em;
        color: var(--terminal-prompt);
        background: color-mix(in oklch, var(--terminal-prompt) 14%, transparent);
        padding: 1px 6px;
        border-radius: 3px;
        border: 1px solid
            color-mix(in oklch, var(--terminal-prompt) 24%, transparent);
    }

    .terminal-body {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border);
        border-radius: 0 0 6px 6px;
        box-shadow: var(--shadow-card);
        /* Sized to content, capped — no more 78vh of empty room on first paint. */
        min-height: 260px;
        max-height: min(72vh, 720px);
    }

    .scroll-area {
        flex: 1 1 auto;
        overflow-y: auto;
        min-height: 0;
    }

    .suggestions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.35rem;
        padding: 0.6rem 0.9rem;
        border-top: 1px solid
            color-mix(in oklch, var(--terminal-comment) 30%, transparent);
    }

    .hint {
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--terminal-comment);
        margin-right: 0.15rem;
    }

    .suggestion {
        font-family: var(--font-mono);
        font-size: 11px;
        letter-spacing: 0.02em;
        padding: 0.2rem 0.55rem;
        border-radius: 3px;
        color: var(--terminal-prompt);
        background: color-mix(in oklch, var(--terminal-prompt) 10%, transparent);
        border: 1px solid
            color-mix(in oklch, var(--terminal-prompt) 26%, transparent);
        cursor: pointer;
        transition:
            background-color 0.15s ease,
            color 0.15s ease;
    }

    .suggestion:hover {
        background: var(--terminal-prompt);
        color: var(--terminal-bg);
    }

    .suggestion:focus-visible {
        outline: 2px solid var(--terminal-prompt);
        outline-offset: 2px;
    }
</style>
