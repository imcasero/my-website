<script lang="ts">
  import { terminal, type TerminalState } from "$lib/stores/terminal.svelte";
  import { executeCommand } from "$lib/terminal/commands";
  import TerminalInput from "./TerminalInput.svelte";
  import TerminalOutput from "./TerminalOutput.svelte";
  import { onMount } from "svelte";

  let terminalContainer: HTMLDivElement;

  function handleCommand(command: string) {
    // Add command to terminal output
    terminal.addLine({
      type: "command",
      content: command,
    });

    // Add to command history
    terminal.addCommand(command);

    // Execute command
    const result = executeCommand(command);

    // Add result to terminal output (if not empty)
    if (result.content || result.component) {
      terminal.addLine({
        type: result.type,
        content: result.content,
        component: result.component,
      });
    }

    // Scroll to bottom after a short delay
    setTimeout(() => {
      if (terminalContainer) {
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
      }
    }, 10);
  }

  onMount(() => {
    // Show welcome banner only on first mount
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

<div
  class="terminal-container flex flex-col h-[80vh] w-full max-w-5xl border border-border rounded-lg overflow-hidden bg-background"
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
  <TerminalInput currentPath={terminal.currentPath} onSubmit={handleCommand} />
</div>

<style>
  .terminal-container {
    font-family: var(--font-mono);
  }
</style>
