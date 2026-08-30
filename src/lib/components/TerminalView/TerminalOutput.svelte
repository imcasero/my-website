<script lang="ts">
  import type { TerminalLine } from "$lib/stores/terminal.svelte";
  import About from "$lib/components/StaticView/About/About.svelte";
  import TechStack from "$lib/components/StaticView/TechStack/TechStack.svelte";
  import Experience from "$lib/components/StaticView/Experience/Experience.svelte";
  import Projects from "$lib/components/StaticView/Projects/Projects.svelte";
  import Contact from "$lib/components/StaticView/Contact/Contact.svelte";

  interface Props {
    lines: TerminalLine[];
    currentPath: string;
  }

  let { lines, currentPath }: Props = $props();

  const componentMap: Record<string, any> = {
    About,
    TechStack,
    Experience,
    Projects,
    Contact,
  };

  function getPrompt(path: string): string {
    return `imcasero@dev:${path}$`;
  }
</script>

<div class="output">
  {#each lines as line (line.id)}
    {#if line.type === "command"}
      <div class="line cmd">
        <span class="prompt">{getPrompt(currentPath)}</span>
        <span>{line.content}</span>
      </div>
    {:else if line.type === "component" && line.component}
      {@const Component = componentMap[line.component]}
      <div class="line terminal-render">
        {#if Component}
          <Component />
        {:else}
          <p class="terminal-error">
            Component not found: {line.component}
          </p>
        {/if}
      </div>
    {:else if line.type === "error"}
      <div class="line terminal-error">{line.content}</div>
    {:else if line.type === "text"}
      {@const isArt = line.content.includes("\u2588")}
      <div class="line text" class:art={isArt}>{line.content}</div>
    {/if}
  {/each}
</div>

<style>
  .output {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1rem 0.9rem;
    font-size: var(--text-sm);
    line-height: 1.6;
  }

  .line {
    animation: slide-up 0.15s ease-out;
  }

  .cmd {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    color: var(--terminal-text);
  }

  .prompt {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .text {
    white-space: pre-wrap;
    color: var(--terminal-comment);
  }

  /* The block wordmark must never wrap — a broken row destroys the letters.
       It scales with the viewport and scrolls rather than reflowing. */
  .art {
    white-space: pre;
    overflow-x: auto;
    font-size: clamp(6px, 1.35vw, 11px);
    line-height: 1.05;
    color: var(--terminal-prompt);
    margin-bottom: 0.5rem;
    scrollbar-width: none;
  }

  .art::-webkit-scrollbar {
    display: none;
  }

  .terminal-render {
    margin: 0.5rem 0 1rem;
    padding-left: 0.5rem;
    border-left: 1px solid color-mix(in oklch, var(--terminal-prompt) 30%, transparent);
  }
</style>
