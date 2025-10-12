<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";

  const projects = [
    {
      name: "Listify",
      description: "To-do list app with stylish and functional task management",
      tech: ["NextJS", "TypeScript", "TailwindCSS"],
      repo: "https://github.com/imcasero/Listify",
      demo: "https://listify.imcasero.dev/",
    },
    {
      name: "Karyo API",
      description:
        "REST API for job application management with query capabilities",
      tech: ["NestJS", "TypeScript", "Prisma ORM", "PostgreSQL"],
      repo: "https://github.com/imcasero/karyo-api",
      demo: null,
    },
    {
      name: "DevFinder",
      description:
        "GitHub user search tool with profile exploration and recent searches",
      tech: ["React", "TypeScript", "TailwindCSS"],
      repo: "https://github.com/imcasero/devfinder",
      demo: "https://devfinder.imcasero.dev/",
    },
    {
      name: "PX to REM Converter",
      description: "CSS unit conversion tool for pixels to rem units",
      tech: ["Vite", "React", "React Hook Form"],
      repo: "https://github.com/imcasero/px-to-rem-converter",
      demo: "https://px-to-rem-converter-imcasero.vercel.app/",
    },
  ];
</script>

<Card>
  <h2 class="text-2xl">/projects</h2>
  <div>
    <Command prompt="cat ~/projects/all.json">
      <div class="flex flex-col gap-4 font-mono text-sm">
        {#each projects as project}
          <div class="flex flex-col gap-2 border-l-2 border-primary/30 pl-3">
            <div class="flex items-center gap-2">
              <span class="text-primary">[{project.name}]</span>
            </div>
            <p class="text-muted-foreground">{project.description}</p>
            <div class="flex flex-wrap gap-2">
              {#each project.tech as tech}
                <span
                  class="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                >
                  {tech}
                </span>
              {/each}
            </div>
            <div class="flex gap-3 text-sm">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <span class="text-primary">→</span>
                <span>repo</span>
              </a>
              {#if project.demo}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span class="text-primary">→</span>
                  <span>demo</span>
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>
