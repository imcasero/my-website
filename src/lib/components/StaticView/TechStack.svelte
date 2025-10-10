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
  <h2 class="text-2xl">/tech-stack</h2>
  <div>
    <Command prompt="ls -la ~/tech-stack/">
      <div class="flex flex-col gap-1 font-mono text-sm">
        {#each techStack as tech}
          <div class="flex gap-3">
            <span class="text-muted-foreground w-28">drwxr-xr-x</span>
            <span class="text-muted-foreground w-24">{tech.category}</span>
            <span>{tech.name}</span>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>
