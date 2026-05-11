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
    <div class="flex flex-col gap-2 font-mono">
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

  .tech-row {
    display: flex;
    gap: 1.25rem;
    align-items: baseline;
    font-size: 0.875rem;
  }

  .perm {
    color: var(--terminal-comment);
    width: 7rem;
    flex-shrink: 0;
    font-size: 0.8rem;
  }

  .cat {
    color: var(--terminal-warning);
    width: 5.5rem;
    flex-shrink: 0;
  }

  .tech-name {
    color: var(--terminal-success);
    font-weight: 700;
  }
</style>
