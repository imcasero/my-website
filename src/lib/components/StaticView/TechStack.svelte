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
  <h2 class="section-title">/tech-stack</h2>
  <div>
    <Command prompt="ls -la ~/tech-stack/">
      <div class="flex flex-col gap-1.5 font-mono text-sm">
        {#each techStack as tech}
          <div class="tech-row flex gap-3 items-center">
            <span class="perm">-rw-r--r--</span>
            <span class="cat">{tech.category}</span>
            <span class="tech-name">{tech.name}</span>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>

<style>
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--terminal-prompt);
    letter-spacing: -0.01em;
  }

  .perm {
    color: var(--terminal-comment);
    width: 7rem;
    flex-shrink: 0;
  }

  .cat {
    color: var(--terminal-warning);
    width: 6rem;
    flex-shrink: 0;
  }

  .tech-name {
    color: var(--terminal-success);
    font-weight: 700;
  }
</style>
