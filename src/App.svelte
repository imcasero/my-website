<script lang="ts">
  import ThemeToggle from "$lib/components/shared/ThemeToggle.svelte";
  import ModeToggle from "$lib/components/shared/ModeToggle.svelte";
  import AccentPicker from "$lib/components/shared/AccentPicker.svelte";
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

<div class="app flex flex-col items-center w-full min-h-screen px-4 py-4 gap-4">
  <div class="layout-container w-full">
    <header class="toolbar flex justify-between items-center gap-2">
      <div class="flex-shrink-0">
        <ModeToggle />
      </div>
      <div class="flex items-center gap-1.5 min-w-0 flex-shrink-0">
        <AccentPicker />
        <div class="toolbar-divider"></div>
        <ThemeToggle />
      </div>
    </header>
  </div>

  <main id="main-content" tabindex="-1" class="layout-container w-full">
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

  .layout-container {
    max-width: 860px;
    margin: 0 auto;
    width: 100%;
  }

  .toolbar {
    font-family: var(--font-mono);
  }

  .toolbar-divider {
    width: 1px;
    height: 18px;
    background: var(--border);
    opacity: 0.6;
    margin: 0 2px;
  }
</style>
