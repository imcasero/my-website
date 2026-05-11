<script lang="ts">
  import { theme } from "$lib/stores/theme.svelte";

  let isDark = $derived(theme.current === "dark");
</script>

<button
  onclick={() => theme.toggle()}
  class="cmd-btn"
  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  aria-pressed={isDark}
  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
>
  <span class="prefix">
    <span class="dollar">$</span>
    <span class="label">mode</span>
    <span class="sep">:</span>
  </span>
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
