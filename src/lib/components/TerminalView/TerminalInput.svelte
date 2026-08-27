<script lang="ts">
  import { terminal } from "$lib/stores/terminal.svelte";
  import { completeCommand, commandNames } from "$lib/terminal/commands";
  import { onMount } from "svelte";

  interface Props {
    currentPath: string;
    onSubmit: (command: string) => void;
  }

  let { currentPath, onSubmit }: Props = $props();

  let inputValue = $state("");
  let inputElement: HTMLInputElement;

  let prompt = $derived(`imcasero@dev:${currentPath}$`);

  /** Ghost suffix shown inline when a single command matches the prefix. */
  let ghost = $derived.by(() => {
    const value = inputValue;
    if (!value || value.includes(" ")) return "";
    const matches = commandNames.filter((name) => name.startsWith(value));
    return matches.length === 1 ? matches[0].slice(value.length) : "";
  });

  export function focus() {
    inputElement?.focus();
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue.trim()) {
        onSubmit(inputValue);
        inputValue = "";
      }
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = terminal.getPreviousCommand();
      if (prev !== null) inputValue = prev;
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = terminal.getNextCommand();
      if (next !== null) inputValue = next;
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();
      if (inputValue.includes(" ")) return;
      const completed = completeCommand(inputValue);
      if (completed) inputValue = completed;
      return;
    }

    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      terminal.clear();
    }
  }

  onMount(() => {
    inputElement?.focus();
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="input-row" onclick={focus}>
  <span class="prompt">{prompt}</span>

  <span class="field">
    <span class="mirror" aria-hidden="true">{inputValue}<span class="ghost">{ghost}</span></span>
    <input
      bind:this={inputElement}
      bind:value={inputValue}
      onkeydown={handleKeyDown}
      type="text"
      class="terminal-input"
      aria-label="Terminal command input"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck={false}
    />
  </span>
</div>

<style>
  .input-row {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.7rem 0.9rem;
    cursor: text;
    border-top: 1px solid color-mix(in oklch, var(--terminal-comment) 30%, transparent);
    font-size: var(--text-sm);
  }

  .input-row:focus-within {
    outline: 2px solid var(--terminal-prompt);
    outline-offset: 2px;
  }

  .prompt {
    color: var(--terminal-prompt);
    font-weight: 700;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* The mirror renders typed text plus the ghost completion; the real input
       sits transparently on top so the caret and selection stay native. */
  .field {
    position: relative;
    flex: 1;
    min-width: 0;
  }

  .mirror {
    white-space: pre;
    color: var(--terminal-text);
    pointer-events: none;
  }

  .ghost {
    color: var(--terminal-comment);
  }

  .terminal-input {
    position: absolute;
    inset: 0;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: transparent;
    caret-color: var(--terminal-cursor);
    font-family: var(--font-mono);
    font-size: inherit;
    font-variant-ligatures: none;
  }

  .terminal-input::selection {
    background: color-mix(in oklch, var(--terminal-prompt) 40%, transparent);
  }
</style>
