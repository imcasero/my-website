<script lang="ts">
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
</script>

<Card>
  <div class="flex flex-col gap-1">
    <p class="text-sm" style="color: var(--terminal-comment)">
      <span class="dollar">$</span> whoami
    </p>
    <h1 class="text-4xl font-bold" style="color: var(--terminal-success)">
      Diego Casero<span class="cursor">_</span>
    </h1>
  </div>
  <p class="text-sm" style="color: var(--terminal-warning)">@imcasero.dev</p>

  <div>
    <Command prompt="cat ~/role.txt">
      <p class="text-lg" style="color: var(--terminal-success)">Software Developer</p>
    </Command>
  </div>
</Card>

<style>
  .dollar {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .cursor {
    font-weight: 700;
    animation: cursor-blink 1s step-end infinite;
    color: var(--terminal-prompt);
  }
</style>
