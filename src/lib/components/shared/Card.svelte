<script lang="ts">
  let { children } = $props();
</script>

<article
  class="flex flex-col gap-2 border border-border rounded-lg p-6 bg-card w-full"
>
  {@render children()}
</article>
