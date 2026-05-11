<script lang="ts">
  interface Props {
    prompt: string;
    children: any;
  }

  let { prompt, children }: Props = $props();
</script>

<div class="cmd flex flex-col gap-3">
  <div class="cmd-line flex items-center gap-2 text-sm">
    <span class="dollar">$</span>
    <span class="cmd-text">{prompt}</span>
  </div>
  <div class="cmd-output">
    {@render children()}
  </div>
</div>

<style>
  .dollar {
    color: var(--terminal-prompt);
    font-weight: 700;
    flex-shrink: 0;
  }

  .cmd-text {
    color: var(--muted-foreground);
    font-size: 0.8rem;
  }

  .cmd-output {
    padding-left: 1rem;
  }
</style>
