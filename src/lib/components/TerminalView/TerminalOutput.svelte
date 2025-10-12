<script lang="ts">
  import type { TerminalLine } from "$lib/stores/terminal.svelte";
  import About from "$lib/components/StaticView/About.svelte";
  import TechStack from "$lib/components/StaticView/TechStack.svelte";
  import Experience from "$lib/components/StaticView/Experience.svelte";
  import Projects from "$lib/components/StaticView/Projects.svelte";
  import Contact from "$lib/components/StaticView/Contact.svelte";

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

<div class="terminal-output flex flex-col gap-2">
  {#each lines as line (line.id)}
    {#if line.type === "command"}
      <div class="flex items-center gap-2">
        <span class="text-primary">{getPrompt(currentPath)}</span>
        <span class="text-foreground">{line.content}</span>
      </div>
    {:else if line.type === "component" && line.component}
      {@const Component = componentMap[line.component]}
      <div class="component-output my-2">
        {#if Component}
          <Component />
        {:else}
          <p class="text-error">Component not found: {line.component}</p>
        {/if}
      </div>
    {:else if line.type === "error"}
      <div class="text-terminal-error">
        {line.content}
      </div>
    {:else if line.type === "text"}
      <div class="text-muted-foreground whitespace-pre-wrap">
        {line.content}
      </div>
    {/if}
  {/each}
</div>

<style>
  .terminal-output {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
  }

  .component-output {
    width: 100%;
  }
</style>
