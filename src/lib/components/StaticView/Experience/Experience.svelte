<script lang="ts">
    import Card from "../../shared/Card.svelte";
    import Command from "../../shared/Command.svelte";
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
    <div class="desc-body">
        <p>
            Build internal tools serving <span class="accent">5,000+</span>
            daily users — complex forms with dependent field logic, multi-step
            validation, and state management using
            <span class="accent">React</span>,
            <span class="accent">Formik</span>, and
            <span class="accent">Jest</span>. Work closely with experienced team
            members on
            <span class="accent">microfrontend architecture</span> and custom component
            libraries.
        </p>
        <div class="impact-block">
            <p class="impact-title"><span class="comment">##</span> Impact:</p>
            <ul class="impact-list">
                <li>
                    <span class="arr">→</span>Introduced bi-weekly coffee breaks
                    for team cohesion and knowledge sharing
                </li>
                <li>
                    <span class="arr">→</span>Participated in Agile adoption:
                    retrospectives, sprint planning and team collaboration
                </li>
                <li>
                    <span class="arr">→</span>Delivered production features for
                    critical automation workflows
                </li>
                <li>
                    <span class="arr">→</span>Reduced key processes from
                    <span class="accent">months to days</span> through systematic
                    refactoring
                </li>
                <li>
                    <span class="arr">→</span>Established testing patterns for
                    complex form validation logic
                </li>
                <li>
                    <span class="arr">→</span>Regular participant in code
                    reviews and architectural discussions
                </li>
            </ul>
        </div>
        <p class="stack">
            <span class="dollar">$</span> <span class="comment">stack:</span>
            <span class="accent">React</span> ·
            <span class="accent">TypeScript</span> ·
            <span class="accent">Formik</span> ·
            <span class="accent">CSS Modules</span> ·
            <span class="accent">Jest</span> ·
            <span class="accent">Microfrontends</span> ·
            <span class="accent">Scrum</span>
        </p>
    </div>
{/snippet}

{#snippet GlobantDescription()}
    <div class="desc-body">
        <p>
            Joined specialized training program for <span class="accent"
                >Iberia's</span
            >
            digital transformation. Worked on Customer Experience team handling
            pre/post-purchase flows on public website. Rapidly grew from junior
            to <span class="accent">team's React reference</span>.
        </p>
        <div class="impact-block">
            <p class="impact-title"><span class="comment">##</span> Impact:</p>
            <ul class="impact-list">
                <li>
                    <span class="arr">→</span>Drove
                    <span class="accent">30%</span> reduction in production bugs through
                    systematic clean code practices
                </li>
                <li>
                    <span class="arr">→</span>Led
                    <span class="accent">React</span> adoption: built company's first
                    React web component and reusable component library
                </li>
                <li>
                    <span class="arr">→</span>Developed comprehensive POC
                    exploring <span class="accent">hexagonal architecture</span> patterns
                </li>
                <li>
                    <span class="arr">→</span>Became primary code reviewer for
                    React implementations
                </li>
                <li>
                    <span class="arr">→</span>Collaborated with cloud team on
                    <span class="accent">AWS</span> deployment pipeline (S3, CloudFront)
                </li>
                <li>
                    <span class="arr">→</span>Improved performance and test
                    coverage across legacy <span class="accent">Angular</span> codebase
                </li>
            </ul>
        </div>
        <p class="stack">
            <span class="dollar">$</span> <span class="comment">stack:</span>
            <span class="accent">React</span> ·
            <span class="accent">Angular</span> ·
            <span class="accent">TypeScript</span> ·
            <span class="accent">SASS</span> ·
            <span class="accent">Jest</span> ·
            <span class="accent">Web Components</span> ·
            <span class="accent">AWS</span> ·
            <span class="accent">GitLab</span>
        </p>
    </div>
{/snippet}

{#snippet InetumDescription()}
    <div class="desc-body">
        <p>
            Contributed to digital services for <span class="accent"
                >Spain's Land Registry</span
            >
            public portal. Proactively proposed and delivered a complete landing
            page redesign — created wireframes in
            <span class="accent">Figma</span>
            and implemented using
            <span class="accent">HTML</span>, <span class="accent">CSS</span>,
            and <span class="accent">vanilla JavaScript</span>. Gained exposure
            to legacy <span class="accent">.NET</span> backend systems.
        </p>
        <p class="stack">
            <span class="dollar">$</span> <span class="comment">stack:</span>
            <span class="accent">HTML</span> ·
            <span class="accent">CSS</span> ·
            <span class="accent">JavaScript</span> ·
            <span class="accent">.NET</span> ·
            <span class="accent">Figma</span>
        </p>
    </div>
{/snippet}

<Card>
    <h2 class="section-title">
        <span class="indicator">●</span>/experience
    </h2>
    <Command prompt="cat ~/work-history.log">
        <div class="flex flex-col gap-6 font-mono">
            {#each experiences as exp}
                <div class="exp-entry">
                    <div class="exp-header">
                        <span class="period">{exp.period}</span>
                        <span class="sep">→</span>
                        <span class="position">{exp.position}</span>
                    </div>
                    <div class="company">@{exp.company}</div>
                    <div class="mt-2">
                        {@render exp.description()}
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

    .exp-entry {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .exp-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
    }

    .period {
        color: var(--terminal-warning);
        font-weight: 600;
    }

    .sep {
        color: var(--terminal-comment);
    }

    .position {
        color: var(--primary);
        font-weight: 700;
    }

    .company {
        color: var(--terminal-prompt);
        font-size: 0.82rem;
        opacity: 0.85;
    }

    .desc-body {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        font-size: 0.85rem;
        color: var(--foreground);
        line-height: 1.7;
    }

    .accent {
        color: var(--terminal-prompt);
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .impact-block {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .impact-title {
        color: var(--terminal-prompt);
        font-weight: 600;
        font-size: 0.82rem;
    }

    .impact-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-left: 0.5rem;
    }

    .impact-list li {
        display: flex;
        gap: 0.5rem;
        align-items: baseline;
    }

    .arr {
        color: var(--terminal-prompt);
        font-weight: 700;
        flex-shrink: 0;
    }

    .dollar {
        color: var(--terminal-prompt);
        font-weight: 700;
    }

    .comment {
        color: var(--terminal-comment);
    }

    .stack {
        font-size: 0.78rem;
        color: var(--terminal-comment);
        margin-top: 0.25rem;
        line-height: 1.8;
    }
</style>
