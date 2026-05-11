<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";

  const techStack = [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "Angular", category: "frontend" },
    { name: "TypeScript", category: "language" },
    { name: "Nest.js", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "PostgreSQL", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Git", category: "tools" },
  ];
</script>

<Card>
  <h2 class="section-title">
    <span class="indicator">●</span>/tech-stack
  </h2>
  <Command prompt="ls -la ~/tech-stack/">
    <div class="stack-list">
      {#each techStack as tech}
        <div class="tech-row">
          <span class="perm">-rw-r--r--</span>
          <span class="cat">{tech.category}</span>
          <span class="tech-name">{tech.name}</span>
        </div>
      {/each}
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

  .stack-list {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    overflow-x: hidden;
  }

  .tech-row {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    min-width: 0;
  }

  .perm {
    color: var(--terminal-comment);
    font-size: 0.75rem;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .cat {
    color: var(--terminal-warning);
    width: 5rem;
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 0.82rem;
  }

  .tech-name {
    color: var(--terminal-success);
    font-weight: 700;
    white-space: nowrap;
  }

  /* ≤ 480px: ocultar perm, reducir cat */
  @media (max-width: 480px) {
    .perm {
      display: none;
    }

    .cat {
      width: 4.5rem;
      font-size: 0.78rem;
    }

    .stack-list {
      font-size: 0.82rem;
    }
  }
</style>
