<script lang="ts">
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
</script>

<Card>
  <div class="flex flex-col gap-1">
    <p class="cmd-label">
      <span class="dollar">$</span>
      <span class="cmd-name">whoami</span>
    </p>
    <h1 class="name">Diego Casero<span class="cursor">_</span></h1>
  </div>
  <p class="handle">@imcasero.dev</p>

  <Command prompt="cat ~/role.txt">
    <p class="role">Software Developer</p>
  </Command>
</Card>

<style>
  .cmd-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
  }

  .dollar {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .cmd-name {
    color: var(--muted-foreground);
  }

  .name {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--terminal-success);
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-top: 0.25rem;
  }

  .cursor {
    color: var(--terminal-prompt);
    animation: cursor-blink 1s step-end infinite;
  }

  .handle {
    font-size: 0.9rem;
    color: var(--terminal-warning);
  }

  .role {
    font-size: 1.1rem;
    color: var(--terminal-success);
    font-weight: 600;
  }
</style>
