<script lang="ts">
    let { children } = $props();
</script>

<article
    class="card flex flex-col gap-3 border border-border rounded-[3px] p-6 bg-card w-full"
>
    {@render children()}
</article>

<style>
    .card {
        transition: border-color 0.3s ease;
    }

    .card:hover {
        border-color: color-mix(
            in oklch,
            var(--terminal-prompt) 35%,
            var(--border)
        );
    }
</style>
