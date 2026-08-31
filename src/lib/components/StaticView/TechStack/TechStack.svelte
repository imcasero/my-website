<script lang="ts">
  import SectionHeading from "$lib/components/shared/SectionHeading.svelte";
  import { groups } from "./constants";
</script>

<section id="tech-stack" aria-labelledby="tech-stack-heading">
  <SectionHeading path="tech-stack" id="tech-stack-heading" />

  <dl class="groups">
    {#each groups as group}
      <div class="group">
        <dt class="meta cat">{group.category}</dt>
        <dd class="items">
          {#each group.items as item}
            <span class="item">{item}</span>
          {/each}
        </dd>
      </div>
    {/each}
  </dl>
</section>

<style>
  .groups {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .group {
    display: grid;
    grid-template-columns: 6.5rem minmax(0, 1fr);
    align-items: baseline;
    gap: 1rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid var(--hairline);
  }

  .group:first-child {
    border-top: 1px solid var(--hairline);
  }

  .cat {
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem 1.1rem;
  }

  .item {
    font-family: var(--font-mono);
    font-size: var(--text-base);
    font-weight: 500;
    color: var(--foreground);
    letter-spacing: -0.01em;
  }

  @media (max-width: 520px) {
    .group {
      grid-template-columns: 1fr;
      gap: 0.35rem;
    }
  }
</style>
