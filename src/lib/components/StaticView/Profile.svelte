<script lang="ts">
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
</script>

<Card>
  <div>
    <div>
      <p class="text-sm text-muted-foreground">
        <span class="text-primary">$</span> whoami
      </p>
      <h1 class="text-4xl">
        Diego Casero<span
          class="font-bold animate-[pulse_0.8s_ease-in-out_infinite] opacity-0"
        >
          _
        </span>
      </h1>
    </div>
  </div>
  <p class="text-lg text-muted-foreground">@imcasero.dev</p>

  <div>
    <Command prompt="cat ~/role.txt">
      <p class="text-lg">Software Developer</p>
    </Command>
  </div>
</Card>
