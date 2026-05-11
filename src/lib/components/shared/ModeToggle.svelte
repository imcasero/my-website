<script lang="ts">
  import { currentMode } from "$lib/stores/mode.svelte";

  let isTerminal = $derived(currentMode.current === "terminal");
</script>

<button
  onclick={() => currentMode.toggle()}
  class="cmd-btn"
  aria-label={isTerminal ? "Switch to static view" : "Switch to terminal view"}
  aria-pressed={isTerminal}
  title={isTerminal ? "Switch to static view" : "Switch to terminal view"}
>
  <span class="prefix">
    <span class="dollar">$</span>
    <span class="label">view</span>
    <span class="sep">:</span>
  </span>
  {#if isTerminal}
    <span class="icon">&gt;_</span>
    <span class="value">terminal</span>
  {:else}
    <span class="icon">⊞</span>
    <span class="value">static</span>
  {/if}
</button>

<style>
  .cmd-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.375rem 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--foreground);
    border-radius: 3px;
    cursor: pointer;
    white-space: nowrap;
    transition: border-color 0.15s ease;
    letter-spacing: 0.02em;
  }

  .cmd-btn:hover {
    border-color: var(--terminal-prompt);
  }

  .cmd-btn:focus {
    outline: none;
    border-color: var(--terminal-prompt);
    box-shadow: 0 0 0 1px var(--terminal-prompt);
  }

  .dollar {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .label {
    color: var(--muted-foreground);
  }

  .sep {
    color: var(--muted-foreground);
  }

  .icon {
    color: var(--terminal-warning);
    font-weight: 700;
  }

  .value {
    color: var(--terminal-success);
    font-weight: 700;
  }

  @media (max-width: 540px) {
    .prefix {
      display: none;
    }
  }
</style>
