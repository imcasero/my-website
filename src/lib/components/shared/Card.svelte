<script lang="ts">
  let { children } = $props();
</script>

<article class="card flex flex-col gap-2 border border-border rounded-lg p-6 bg-card w-full">
  {@render children()}
</article>

<style>
  .card {
    border-left: 2px solid var(--terminal-prompt);
    transition: border-color 0.3s ease;
  }
</style>
