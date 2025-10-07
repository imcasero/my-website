<script lang="ts">
  import { currentMode } from "$lib/stores/mode";

  $: isTerminal = $currentMode === "terminal";
</script>

<button
  on:click={() => currentMode.toggle()}
  class="w-fit p-3 rounded-lg
         bg-card border border-border
         hover:bg-accent transition-all duration-300"
  aria-label="Toggle mode"
  title={isTerminal ? "Switch to static mode" : "Switch to terminal mode"}
>
  <span class="flex items-center gap-2">
    {#if isTerminal}
      <span>>_</span>
      <span>Terminal</span>
    {:else}
      <span>⌘</span>
      <span>Static</span>
    {/if}
  </span>
</button>
