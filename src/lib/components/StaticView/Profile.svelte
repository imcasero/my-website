<script lang="ts">
  import Command from "../shared/Command.svelte";
</script>

<article
  class="flex flex-col gap-2 border border-border rounded-lg p-6 bg-card w-full"
>
  <div>
    <Command text="whoami" />
    <h1 class="text-4xl">
      Diego Casero<span
        class="font-bold animate-[pulse_0.8s_ease-in-out_infinite] opacity-0"
      >
        _
      </span>
    </h1>
  </div>
  <p class="text-lg text-muted-foreground">@imcasero.dev</p>

  <div>
    <Command text="cat ~/role.txt" />
    <p class="text-lg">Software Developer</p>
  </div>
</article>
