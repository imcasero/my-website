<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";

  const projects = [
    {
      name: "ChefFlow",
      description: "Recipe and weekly meal planning app with real users and active growth. Self-hosted on a VPS with a custom NestJS backend.",
      tech: ["Next.js", "NestJS", "TypeScript", "TailwindCSS", "PostgreSQL", "Docker"],
      repo: "https://github.com/orgs/Chefflow/repositories",
      demo: "https://chefflow.pro",
    },
    {
      name: "Calmind Series",
      description: "Competitive league system for a real Pokémon community. Manages splits, divisions, coach lives, standings and automatic promotions/relegations.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL"],
      repo: "https://github.com/imcasero/calmind-series",
      demo: "https://calmind-series.vercel.app",
    },
    {
      name: "Carmen — Graphic Designer",
      description: "Portfolio site for a graphic designer. Collaborative project: visual concept by the client, pixel-perfect implementation in React.",
      tech: ["React", "Vite", "TypeScript", "TailwindCSS", "Motion"],
      repo: "https://github.com/imcasero/carmen-port",
      demo: "https://carmen.elnodo.studio",
    },
  ];

  const extIcon = `M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`;
</script>

<Card>
  <h2 class="section-title">
    <span class="indicator">●</span>/projects
  </h2>
  <Command prompt="cat ~/projects/all.json">
    <div class="flex flex-col gap-5 font-mono">
      {#each projects as project}
        <div class="project">
          <div class="project-name">[{project.name}]</div>
          <p class="project-desc">{project.description}</p>
          <div class="tags">
            {#each project.tech as tech}
              <span class="tag">{tech}</span>
            {/each}
          </div>
          <div class="links">
            <a href={project.repo} target="_blank" rel="noopener noreferrer"
               aria-label="View {project.name} repository on GitHub (opens in new tab)"
               class="link">
              <span class="arr">→</span>repo
              <svg class="w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={extIcon}/>
              </svg>
            </a>
            {#if project.demo}
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                 aria-label="View {project.name} live demo (opens in new tab)"
                 class="link">
                <span class="arr">→</span>demo
                <svg class="w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={extIcon}/>
                </svg>
              </a>
            {/if}
          </div>
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

  .project {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .project-name {
    color: var(--terminal-prompt);
    font-weight: 700;
    font-size: 0.95rem;
  }

  .project-desc {
    color: var(--foreground);
    line-height: 1.6;
    font-size: 0.82rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .tag {
    font-size: 0.72rem;
    padding: 0.15rem 0.55rem;
    border-radius: 3px;
    background-color: color-mix(in oklch, var(--terminal-success) 10%, transparent);
    color: var(--terminal-success);
    border: 1px solid color-mix(in oklch, var(--terminal-success) 22%, transparent);
    font-weight: 600;
    letter-spacing: 0.02em;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  .links {
    display: flex;
    gap: 1rem;
    margin-top: 0.125rem;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--terminal-comment);
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.15s ease;
  }

  .link:hover {
    color: var(--terminal-warning);
  }

  .arr {
    color: var(--terminal-warning);
    font-weight: 700;
  }
</style>
