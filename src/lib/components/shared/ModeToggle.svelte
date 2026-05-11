<script lang="ts">
  import { currentMode } from "$lib/stores/mode.svelte";

  let isTerminal = $derived(currentMode.current === "terminal");
</script>

<button
  onclick={() => currentMode.toggle()}
  class="cmd-btn flex items-center gap-2 px-3 py-1.5 font-mono text-xs
         border border-border bg-card text-foreground
         hover:border-primary transition-colors duration-150
         focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
  aria-label={isTerminal ? "Switch to static view" : "Switch to terminal view"}
  aria-pressed={isTerminal}
  title={isTerminal ? "Switch to static view" : "Switch to terminal view"}
>
  <span class="dollar">$</span>
  <span class="text-muted-foreground">view</span>
  <span class="separator">:</span>
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
    border-radius: 3px;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .dollar {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .separator {
    color: var(--muted-foreground);
    margin: 0 -2px;
  }

  .icon {
    color: var(--terminal-warning);
    font-weight: 700;
  }

  .value {
    color: var(--terminal-success);
    font-weight: 700;
  }
</style>
