<script lang="ts">
  import { currentMode } from "$lib/stores/mode";

  $: isTerminal = $currentMode === "terminal";
</script>

<button
  on:click={() => currentMode.toggle()}
  class="fixed top-4 left-4 z-50 px-4 py-2 rounded-lg font-mono text-sm
         transition-all duration-300 hover:scale-105 active:scale-95
         {isTerminal
    ? 'bg-terminal-success text-terminal-bg'
    : 'bg-card text-foreground border border-border'}"
  aria-label="Toggle mode"
  title={isTerminal ? "Switch to static mode" : "Switch to terminal mode"}
>
  <span class="flex items-center gap-2">
    {#if isTerminal}
      <span>▶</span>
      <span>Terminal Mode</span>
    {:else}
      <span>⌘</span>
      <span>Static Mode</span>
    {/if}
  </span>
</button>
