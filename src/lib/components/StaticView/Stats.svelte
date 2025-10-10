<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
</script>

<Card>
  <h2 class="text-2xl">/stats</h2>
  <div>
    <Command prompt="curl ./get-stats.sh">
      <p class="text-muted-foreground">
        ☕ Coffees consumed: <span class="text-primary">2,847</span> (and counting...)
      </p>
    </Command>
  </div>
</Card>
