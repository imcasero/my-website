<script lang="ts">
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";
  import type { Snippet } from "svelte";

  interface Experience {
    period: string;
    position: string;
    company: string;
    description: Snippet;
  }

  const experiences: Experience[] = [
    {
      period: "[Nov 2024 - Present]",
      position: "Front-end Developer",
      company: "CaixaBankTech",
      description: CaixaBankDescription,
    },
    {
      period: "[Aug 2023 - Nov 2024]",
      position: "Front-end Developer",
      company: "Globant",
      description: GlobantDescription,
    },
    {
      period: "[Apr 2023 - Jun 2023]",
      position: "Full-stack Developer",
      company: "Inetum",
      description: InetumDescription,
    },
  ];
</script>

{#snippet CaixaBankDescription()}
  <div class="space-y-3">
    <p>
      Build internal tools serving 5,000+ daily users—complex forms with
      dependent field logic, multi-step validation, and state management using
      React, Formik, and Jest. Work closely with experienced team members on
      microfrontend architecture and custom component libraries.
    </p>
    <div>
      <p class="text-primary mb-2"><span class="text-muted-foreground">##</span> Impact:</p>
      <ul class="space-y-1 ml-4">
        <li>
          <span class="text-primary">→</span> Introduced bi-weekly coffee breaks for team cohesion and knowledge
          sharing
        </li>
        <li>
          <span class="text-primary">→</span> Actively participated in Agile adoption: retrospectives, sprint
          planning improvements, and team collaboration initiatives
        </li>
        <li><span class="text-primary">→</span> Delivered production features for critical automation workflows</li>
        <li>
          <span class="text-primary">→</span> Reduced key processes from months to days through systematic
          refactoring
        </li>
        <li><span class="text-primary">→</span> Established testing patterns for complex form validation logic</li>
        <li>
          <span class="text-primary">→</span> Regular participant in code reviews and architectural discussions
        </li>
      </ul>
    </div>

    <p class="text-sm">
      <span class="text-primary">$</span> <span class="text-muted-foreground">stack:</span> React, TypeScript, Formik,
      CSS Modules, Jest, Microfrontends, Scrum
    </p>
  </div>
{/snippet}

{#snippet GlobantDescription()}
  <div class="space-y-3">
    <p>
      Joined specialized training program for Iberia's digital transformation.
      Worked on Customer Experience team handling pre/post-purchase flows on
      public website. Rapidly grew from junior to team's React reference.
    </p>

    <div>
      <p class="text-primary mb-2"><span class="text-muted-foreground">##</span> Impact:</p>
      <ul class="space-y-1 ml-4">
        <li>
          <span class="text-primary">→</span> Drove 30% reduction in production bugs through systematic clean code
          practices and testing
        </li>
        <li>
          <span class="text-primary">→</span> Led React adoption: built company's first React web component and
          established reusable component library
        </li>
        <li>
          <span class="text-primary">→</span> Developed comprehensive POC exploring hexagonal architecture patterns
          for complex frontend migration
        </li>
        <li>
          <span class="text-primary">→</span> Became primary code reviewer for React implementations and active
          participant in architectural decisions
        </li>
        <li>
          <span class="text-primary">→</span> Collaborated with cloud team on AWS deployment pipeline (S3,
          CloudFront)
        </li>
        <li>
          <span class="text-primary">→</span> Improved performance and test coverage across legacy Angular (1.x, 2+)
          codebase
        </li>
      </ul>
    </div>

    <p class="text-sm">
      <span class="text-primary">$</span> <span class="text-muted-foreground">stack:</span> React, Angular, TypeScript,
      SASS, Jest, Web Components, AWS, GitLab
    </p>
  </div>
{/snippet}

{#snippet InetumDescription()}
  <div class="space-y-3">
    <p>
      Contributed to digital services for Spain's Land Registry public portal.
      Proactively proposed and delivered complete landing page redesign—created
      wireframes in Figma and implemented using HTML, CSS, and vanilla
      JavaScript. Gained exposure to legacy .NET backend systems (VB/C#).
    </p>

    <p class="text-sm">
      <span class="text-primary">$</span> <span class="text-muted-foreground">stack:</span> HTML, CSS, JavaScript, .NET
      (VB, C#), Figma
    </p>
  </div>
{/snippet}

<Card>
  <h2 class="text-2xl">/experience</h2>
  <div>
    <Command prompt="cat ~/work-history.log">
      <div class="flex flex-col gap-4 font-mono text-base">
        {#each experiences as exp}
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span class="text-primary">{exp.period}</span>
              <span class="text-muted-foreground">→</span>
              <span class="text-foreground font-semibold">{exp.position}</span>
            </div>
            <div class="text-muted-foreground">
              @{exp.company}
            </div>
            <div class="mt-2 opacity-90">
              {@render exp.description()}
            </div>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>
