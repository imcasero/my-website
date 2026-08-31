<script lang="ts">
  import SectionHeading from "$lib/components/shared/SectionHeading.svelte";
  import { experiences, VISIBLE_BULLETS } from "./constants";
  let expanded = $state<Record<string, boolean>>({});

  function toggle(company: string) {
    expanded[company] = !expanded[company];
  }
</script>

<section id="experience" aria-labelledby="experience-heading">
  <SectionHeading path="experience" id="experience-heading" />

  <ol class="timeline">
    {#each experiences as exp}
      {@const isOpen = expanded[exp.company] ?? false}
      {@const shown = isOpen ? exp.impact : exp.impact.slice(0, VISIBLE_BULLETS)}
      {@const hidden = exp.impact.length - VISIBLE_BULLETS}
      <li class="entry">
        <span class="node" aria-hidden="true"></span>

        <p class="period meta">{exp.period}</p>
        <h3 class="position">{exp.position}</h3>
        <p class="company">@{exp.company}</p>

        <div class="prose body">
          <p>{@html exp.summary}</p>

          {#if exp.impact.length}
            <ul class="impact">
              {#each shown as bullet}
                <li>{@html bullet}</li>
              {/each}
            </ul>

            {#if hidden > 0}
              <button
                type="button"
                class="more"
                onclick={() => toggle(exp.company)}
                aria-expanded={isOpen}
              >
                <span class="chev" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                {isOpen ? "show less" : `${hidden} more`}
              </button>
            {/if}
          {/if}
        </div>

        <ul class="chips">
          {#each exp.stack as tech}
            <li class="chip">{tech}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ol>
</section>

<style>
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    position: relative;
    padding-left: 1.5rem;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 3px;
    top: 0.45rem;
    bottom: 0.45rem;
    width: 1px;
    background: linear-gradient(to bottom, var(--border), var(--hairline) 85%, transparent);
  }

  .entry {
    position: relative;
  }

  .node {
    position: absolute;
    left: -1.5rem;
    top: 0.3rem;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--background);
    border: 1.5px solid var(--role-prompt);
  }

  .entry:first-child .node {
    background: var(--role-prompt);
    box-shadow: 0 0 0 3px color-mix(in oklch, var(--role-prompt) 18%, transparent);
  }

  .period {
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .position {
    margin-top: 0.35rem;
    font-family: var(--font-mono);
    font-size: var(--text-lg);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
    color: var(--foreground);
  }

  .company {
    margin-top: 0.15rem;
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    color: var(--primary);
  }

  .body {
    margin-top: 0.9rem;
  }

  .body :global(.impact) {
    margin-top: 0.85em;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }

  .body :global(.impact li) {
    position: relative;
    padding-left: 1.25em;
  }

  .body :global(.impact li::before) {
    content: "→";
    position: absolute;
    left: 0;
    font-family: var(--font-mono);
    font-size: 0.8em;
    color: var(--role-prompt);
  }

  .more {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.7rem;
    padding: 0.25rem 0.5rem 0.25rem 0.4rem;
    font-family: var(--font-mono);
    font-size: var(--text-2xs);
    letter-spacing: 0.04em;
    color: var(--muted-foreground);
    background: transparent;
    border: 1px solid var(--border-interactive);
    border-radius: var(--radius);
    cursor: pointer;
    transition:
      color 0.18s ease,
      border-color 0.18s ease;
  }

  .more:hover {
    color: var(--primary);
    border-color: color-mix(in oklch, var(--primary) 45%, transparent);
  }

  .more:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  .chev {
    color: var(--role-prompt);
    font-weight: 700;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-top: 1.1rem;
  }
</style>
