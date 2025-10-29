<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
</script>

<Card>
  <h2 class="text-2xl">/about</h2>
  <div>
    <Command prompt="cat ~/about.txt">
      <div class="space-y-4">
        <p>
          At 15, I discovered programming—and there was no turning back. I'd
          found a field where learning never stops, where every problem solved
          reveals new ones to tackle. That constant evolution is what keeps me
          obsessed.
        </p>
        <p>
          What drew me to frontend is bridging technical complexity with
          user-facing simplicity—building interfaces that hide intricate logic
          behind intuitive experiences. Early in my career, solving problems
          independently taught me to learn from others' code and write for the
          next developer, not to prove I'm clever.
        </p>
        <p>
          I work best in teams—I learn more from others and explaining ideas
          than coding alone.
        </p>
      </div>
    </Command>
  </div>
</Card>
