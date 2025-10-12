<script lang="ts">
  import { terminal } from "$lib/stores/terminal.svelte";
  import { onMount } from "svelte";

  interface Props {
    currentPath: string;
    onSubmit: (command: string) => void;
  }

  let { currentPath, onSubmit }: Props = $props();

  let inputValue = $state("");
  let inputElement: HTMLInputElement;

  function getPrompt(): string {
    return `imcasero@dev:${currentPath}$`;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue.trim()) {
        onSubmit(inputValue);
        inputValue = "";
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevCommand = terminal.getPreviousCommand();
      if (prevCommand !== null) {
        inputValue = prevCommand;
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextCommand = terminal.getNextCommand();
      if (nextCommand !== null) {
        inputValue = nextCommand;
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      // TODO: Implement autocomplete
    } else if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      terminal.clear();
    }
  }

  onMount(() => {
    inputElement?.focus();
  });

  function handleContainerClick() {
    inputElement?.focus();
  }
</script>

<div
  class="terminal-input-container flex items-center gap-2 px-4 py-3 border-t border-border"
  onclick={handleContainerClick}
  onkeydown={(e) => e.key === 'Enter' && handleContainerClick()}
  role="button"
  tabindex="-1"
>
  <span class="text-primary whitespace-nowrap">{getPrompt()}</span>
  <input
    bind:this={inputElement}
    bind:value={inputValue}
    onkeydown={handleKeyDown}
    type="text"
    class="terminal-input flex-1 bg-transparent border-none outline-none text-foreground"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    spellcheck={false}
  />
  <span class="terminal-cursor">▊</span>
</div>

<style>
  .terminal-input-container {
    cursor: text;
  }

  .terminal-input {
    font-family: var(--font-mono);
    font-size: inherit;
  }

  .terminal-input:focus {
    outline: none;
  }
</style>
