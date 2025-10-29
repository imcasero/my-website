<script lang="ts">
  import { currentMode } from "$lib/stores/mode.svelte";

  let isTerminal = $derived(currentMode.current === "terminal");
</script>

<button
  onclick={() => currentMode.toggle()}
  class="w-fit p-3 rounded-lg
         bg-card border border-border
         hover:bg-accent transition-all duration-300
         focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
  aria-label={isTerminal ? "Switch to static view" : "Switch to terminal view"}
  aria-pressed={isTerminal}
  title={isTerminal ? "Switch to static view" : "Switch to terminal view"}
>
  <span class="flex items-center gap-2">
    {#if isTerminal}
      <span aria-hidden="true">>_</span>
      <span>Static View</span>
    {:else}
      <span aria-hidden="true">⌘</span>
      <span>Terminal View</span>
    {/if}
  </span>
</button>
