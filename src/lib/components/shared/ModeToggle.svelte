<script lang="ts">
    import { currentMode } from "$lib/stores/mode.svelte";

    const options = [
        { value: "static" as const, icon: "⊞", label: "static" },
        { value: "terminal" as const, icon: ">_", label: "terminal" },
    ];
</script>

<div class="segmented" role="group" aria-label="View mode">
    {#each options as option}
        {@const selected = currentMode.current === option.value}
        <button
            type="button"
            class="segment"
            class:selected
            aria-pressed={selected}
            onclick={() => currentMode.set(option.value)}
        >
            <span class="icon" aria-hidden="true">{option.icon}</span>
            <span class="label">{option.label}</span>
        </button>
    {/each}
</div>

<style>
    .segmented {
        display: flex;
        padding: 2px;
        gap: 2px;
        border: 1px solid var(--border-interactive);
        border-radius: var(--radius);
        background: var(--sunken);
    }

    .segment {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        padding: 0.35rem 0.5rem;
        font-family: var(--font-mono);
        font-size: var(--text-2xs);
        letter-spacing: 0.04em;
        color: var(--muted-foreground);
        background: transparent;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        white-space: nowrap;
        transition:
            color 0.18s ease,
            background-color 0.18s ease;
    }

    .segment:hover {
        color: var(--foreground);
    }

    .segment.selected {
        background: var(--card);
        color: var(--foreground);
        font-weight: 700;
        box-shadow: 0 1px 2px oklch(0 0 0 / 0.12);
    }

    .segment.selected .icon {
        color: var(--role-prompt);
    }

    .segment:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 1px;
    }
</style>
