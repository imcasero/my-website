<script lang="ts">
  import ThemeToggle from "$lib/components/shared/ThemeToggle.svelte";
  import ModeToggle from "$lib/components/shared/ModeToggle.svelte";
  import StaticView from "$lib/components/StaticView/StaticView.svelte";
  import Terminal from "$lib/components/TerminalView/Terminal.svelte";

  import { currentMode } from "$lib/stores/mode.svelte";
</script>

<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50
         bg-primary text-primary-foreground px-4 py-2 rounded-md
         focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
>
  Skip to main content
</a>

<div class="app flex justify-center items-center flex-col w-full p-3 gap-3">
  <header class="w-full flex justify-between items-center">
    <ModeToggle />
    <ThemeToggle />
  </header>

  <main id="main-content" tabindex="-1" class="w-full flex justify-center">
    {#if currentMode.current === "static"}
      <StaticView />
    {:else}
      <Terminal />
    {/if}
  </main>
</div>

<style>
  .app {
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
</style>
