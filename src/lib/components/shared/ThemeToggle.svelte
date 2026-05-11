<script lang="ts">
  import { theme } from "$lib/stores/theme.svelte";

  let isDark = $derived(theme.current === "dark");
</script>

<button
  onclick={() => theme.toggle()}
  class="cmd-btn flex items-center gap-2 px-3 py-1.5 font-mono text-xs
         border border-border bg-card text-foreground
         hover:border-primary transition-colors duration-150
         focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  aria-pressed={isDark}
  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
>
  <span class="dollar">$</span>
  <span class="text-muted-foreground">mode</span>
  <span class="separator">:</span>
  {#if isDark}
    <span class="icon">◐</span>
    <span class="value">dark</span>
  {:else}
    <span class="icon">○</span>
    <span class="value">light</span>
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
  }

  .value {
    color: var(--terminal-success);
    font-weight: 700;
  }
</style>
