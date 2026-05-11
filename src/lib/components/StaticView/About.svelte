<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
</script>

<Card>
  <h2 class="section-title">
    <span class="indicator">●</span>/about
  </h2>
  <Command prompt="cat ~/about.txt">
    <div class="space-y-3 text-sm leading-relaxed" style="color: var(--foreground); opacity: 0.85;">
      <p>
        At 15, I discovered programming — and there was no turning back. It is
        a field where learning never stops, and where every problem solved
        reveals new ones to tackle. That constant evolution is what keeps me
        obsessed.
      </p>
      <p>
        What drew me to the frontend was bridging technical complexity with
        user-facing simplicity — building interfaces that hide intricate logic
        behind intuitive experiences. Early in my career, solving problems
        independently by reading others' code taught me the importance of coding
        for the next developer and not to prove that I'm clever.
      </p>
      <p>
        I work best in teams — I learn more from listening to others and
        sharing ideas than from coding alone.
      </p>
    </div>
  </Command>
</Card>

<style>
  .section-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--foreground);
    letter-spacing: -0.01em;
  }

  .indicator {
    color: var(--terminal-prompt);
    font-size: 0.6rem;
    flex-shrink: 0;
  }
</style>
