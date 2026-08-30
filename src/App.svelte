<script lang="ts">
  import Rail from "$lib/components/shared/Rail.svelte";
  import StaticView from "$lib/components/StaticView/StaticView.svelte";
  import Terminal from "$lib/components/TerminalView/Terminal.svelte";

  import { currentMode } from "$lib/stores/mode.svelte";
</script>

<a
  href="#main-content"
  class="bg-primary text-primary-foreground focus:ring-primary focus:ring-offset-background sr-only rounded-md
         px-4 py-2 focus:not-sr-only focus:absolute focus:top-2
         focus:left-2 focus:z-50 focus:ring-2 focus:ring-offset-2 focus:outline-none"
>
  Skip to main content
</a>

<div class="shell">
  <Rail />

  <main id="main-content" tabindex="-1" class="content">
    {#if currentMode.current === "static"}
      <StaticView />
    {:else}
      <Terminal />
    {/if}
  </main>
</div>

<style>
  .shell {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(2rem, 5vw, 3rem) clamp(2rem, 5vw, 4.5rem);
    width: 100%;
    max-width: var(--shell-max);
    margin: 0 auto;
    padding: 0 var(--gutter);
    min-height: 100vh;
  }

  .content {
    min-width: 0;
    padding-bottom: clamp(3rem, 8vh, 6rem);
  }

  .content:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    .shell {
      grid-template-columns: var(--rail-w) minmax(0, 1fr);
      align-items: start;
    }

    .content {
      padding-top: clamp(2rem, 5vh, 3.5rem);
    }
  }
</style>
