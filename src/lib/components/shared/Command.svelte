<script lang="ts">
  interface Props {
    prompt: string;
    children: any;
  }

  let { prompt, children }: Props = $props();
</script>

<div class="rounded-lg bg-card flex flex-col gap-2">
  <div class="space-y-2">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
      <span class="text-primary">$</span>
      <span>{prompt}</span>
    </div>
  </div>
  <div class="pl-4 border-l-1 ml-1 border-primary/30">
    {@render children()}
  </div>
</div>
