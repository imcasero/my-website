<script lang="ts">
  import { terminal, type TerminalState } from "$lib/stores/terminal.svelte";
  import { executeCommand } from "$lib/terminal/commands";
  import TerminalInput from "./TerminalInput.svelte";
  import TerminalOutput from "./TerminalOutput.svelte";
  import { onMount } from "svelte";

  let terminalContainer: HTMLDivElement;

  function handleCommand(command: string) {
    terminal.addLine({ type: "command", content: command });
    terminal.addCommand(command);

    const result = executeCommand(command);

    if (result.content || result.component) {
      terminal.addLine({
        type: result.type,
        content: result.content,
        component: result.component,
      });
    }

    setTimeout(() => {
      if (terminalContainer) {
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
      }
    }, 10);
  }

  onMount(() => {
    if (!terminal.initialized) {
      terminal.addLine({
        type: "text",
        content: `
╔══════════════════════════════════════════╗
║                                          ║
║        Welcome to imcasero.dev           ║
║                                          ║
║      Software Developer Portfolio        ║
║                                          ║
╚══════════════════════════════════════════╝

Type 'help' or '?' to see available commands
`,
      });
      terminal.setInitialized(true);
    }
  });
</script>

<div class="terminal-wrapper w-full max-w-5xl">
  <!-- Terminal chrome -->
  <div class="terminal-chrome">
    <div class="traffic-lights">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
    </div>
    <div class="terminal-title">
      <span class="shell-user">diego</span>
      <span class="shell-sep">@</span>
      <span class="shell-host">imcasero.dev</span>
      <span class="shell-sep"> — </span>
      <span class="shell-path">~</span>
    </div>
    <div class="chrome-right">
      <span class="shell-tag">zsh</span>
    </div>
  </div>

  <!-- Terminal body -->
  <div
    class="terminal-container flex flex-col border border-border border-t-0"
    style="height: 78vh; min-height: 480px; max-height: 780px;"
  >
    <div
      bind:this={terminalContainer}
      class="terminal-scroll flex-1 overflow-y-auto"
    >
      <TerminalOutput
        lines={terminal.history}
        currentPath={terminal.currentPath}
      />
    </div>
    <TerminalInput
      currentPath={terminal.currentPath}
      onSubmit={handleCommand}
    />
  </div>
</div>

<style>
  .terminal-wrapper {
    font-family: var(--font-mono);
    filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.35));
  }

  .terminal-chrome {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    height: 38px;
    background: color-mix(in oklch, var(--terminal-bg) 85%, white 5%);
    border: 1px solid var(--border);
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid color-mix(in oklch, var(--border) 60%, transparent);
  }

  .traffic-lights {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .dot-red {
    background: #ff5f57;
    box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.25);
  }

  .dot-yellow {
    background: #ffbd2e;
    box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.2);
  }

  .dot-green {
    background: #28c840;
    box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.2);
  }

  .terminal-title {
    font-size: 12px;
    letter-spacing: 0.01em;
    color: var(--terminal-comment);
    user-select: none;
  }

  .shell-user {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .shell-host {
    color: var(--terminal-success);
    font-weight: 600;
  }

  .shell-sep {
    color: var(--terminal-comment);
  }

  .shell-path {
    color: var(--terminal-warning);
  }

  .chrome-right {
    display: flex;
    align-items: center;
  }

  .shell-tag {
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--terminal-comment);
    background: color-mix(in oklch, var(--terminal-prompt) 15%, transparent);
    padding: 1px 7px;
    border-radius: 3px;
    border: 1px solid color-mix(in oklch, var(--terminal-prompt) 25%, transparent);
  }

  .terminal-container {
    background: var(--terminal-bg);
    color: var(--terminal-text);
    font-family: var(--font-mono);
    border-radius: 0 0 8px 8px;
  }
</style>
