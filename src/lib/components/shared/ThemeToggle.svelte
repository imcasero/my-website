<script lang="ts">
  import { theme } from "$lib/stores/theme.svelte";

  let isDark = $derived(theme.current === "dark");
</script>

<button
  type="button"
  onclick={() => theme.toggle()}
  class="icon-btn"
  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
  aria-pressed={isDark}
  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
>
  {#if isDark}
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor" />
    </svg>
  {:else}
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"
      />
    </svg>
  {/if}
</button>

<style>
  .icon-btn {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: 1px solid var(--border-interactive);
    border-radius: var(--radius);
    background: var(--card);
    color: var(--muted-foreground);
    cursor: pointer;
    transition:
      color 0.18s ease,
      border-color 0.18s ease;
  }

  .icon-btn svg {
    width: 15px;
    height: 15px;
  }

  .icon-btn:hover {
    color: var(--primary);
    border-color: color-mix(in oklch, var(--primary) 45%, transparent);
  }

  .icon-btn:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
</style>
