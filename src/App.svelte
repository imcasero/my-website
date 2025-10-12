<script lang="ts">
  import ThemeToggle from "$lib/components/shared/ThemeToggle.svelte";
  import ModeToggle from "$lib/components/shared/ModeToggle.svelte";
  import StaticView from "$lib/components/StaticView/StaticView.svelte";
  import Terminal from "$lib/components/TerminalView/Terminal.svelte";

  import { currentMode } from "$lib/stores/mode.svelte";
</script>

<div class="app flex justify-center items-center flex-col w-full p-3 gap-3">
  <header class="w-full flex justify-between items-center">
    <ModeToggle />
    <ThemeToggle />
  </header>

  {#if currentMode.current === "static"}
    <StaticView />
  {:else}
    <Terminal />
  {/if}
</div>

<style>
  .app {
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
</style>
