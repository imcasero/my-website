<script lang="ts">
  import ThemeToggle from "./lib/components/shared/ThemeToggle.svelte";
  import ModeToggle from "./lib/components/shared/ModeToggle.svelte";

  import { currentMode } from "./lib/stores/mode";
</script>

<div class="app flex justify-center align-middle">
  <ThemeToggle />
  <ModeToggle />

  {#if $currentMode === "static"}
    <p>Static view</p>
  {:else}
    <p>Terminal view</p>
  {/if}
</div>

<style>
  .app {
    min-height: 100vh;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
</style>
