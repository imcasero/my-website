<script lang="ts">
  interface Props {
    prompt: string;
    children: any;
  }

  let { prompt, children }: Props = $props();
</script>

<div class="cmd flex flex-col gap-2">
  <div class="cmd-line flex items-center gap-2 text-sm">
    <span class="dollar">$</span>
    <span class="cmd-text">{prompt}</span>
  </div>
  <div class="cmd-output pl-4 border-l border-border/60 ml-1">
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
    color: var(--terminal-text, var(--foreground));
    opacity: 0.7;
  }

  .cmd-output {
    border-left-color: color-mix(in oklch, var(--terminal-prompt) 25%, transparent);
    transition: border-color 0.3s ease;
  }
</style>
