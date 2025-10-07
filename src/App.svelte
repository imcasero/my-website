<script lang="ts">
  import ThemeToggle from "$lib/components/shared/ThemeToggle.svelte";
  import ModeToggle from "$lib/components/shared/ModeToggle.svelte";

  import { currentMode } from "$lib/stores/mode";
</script>

<div class="app flex justify-center items-center flex-col w-full p-3 gap-3">
  <header class="w-full flex justify-between items-center">
    <ModeToggle />
    <ThemeToggle />
  </header>

  {#if $currentMode === "static"}
    <p>Static view</p>
  {:else}
    <p>Terminal view</p>
  {/if}
</div>

<style>
  .app {
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
</style>
