<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";

  const experiences = [
    {
      period: "[Nov 2024 - Present]",
      position: "React Software Engineer",
      company: "CaixaBank Tech",
      description:
        "Building dynamic React interfaces using microfrontends and refactoring internal tools for 5,000+ daily users.",
    },
    {
      period: "[Aug 2023 - Nov 2024]",
      position: "Front-end Developer",
      company: "Globant",
      description:
        "Developed complex web applications using React and Angular with cross-functional teams following Agile methodologies.",
    },
    {
      period: "[Apr 2023 - Jun 2023]",
      position: "Full-stack Developer",
      company: "Inetum",
      description:
        "Interface design with Figma and backend development with .NET, contributing to solution design for specific projects.",
    },
  ];
</script>

<Card>
  <h2 class="text-2xl">/experience</h2>
  <div>
    <Command prompt="cat ~/work-history.log">
      <div class="flex flex-col gap-4 font-mono text-sm">
        {#each experiences as exp}
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <span class="text-primary">{exp.period}</span>
              <span class="text-muted-foreground">→</span>
              <span class="text-foreground font-semibold">{exp.position}</span>
            </div>
            <div class="text-muted-foreground">
              @{exp.company}
            </div>
            <div class="text-muted-foreground mt-1">
              {exp.description}
            </div>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>
