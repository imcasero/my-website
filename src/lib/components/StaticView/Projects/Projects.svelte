<script lang="ts">
  import SectionHeading from "$lib/components/shared/SectionHeading.svelte";
  import { projects } from "./constants";

  const extIcon = `M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`;
</script>

<section id="projects" aria-labelledby="projects-heading">
  <SectionHeading path="projects" id="projects-heading" />

  <div class="grid">
    {#each projects as project}
      <article class="card surface">
        <a
          class="thumb"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          tabindex="-1"
          aria-hidden="true"
        >
          <span class="chrome">
            <span class="dots" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>
            <span class="host">{project.host}</span>
          </span>
          <img
            src={project.thumb}
            alt=""
            loading="lazy"
            decoding="async"
            width="900"
            height="600"
          />
        </a>

        <div class="body">
          <h3 class="name">{project.name}</h3>
          <p class="desc">{project.description}</p>

          <ul class="chips">
            {#each project.tech as tech}
              <li class="chip">{tech}</li>
            {/each}
          </ul>

          <div class="links">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View {project.name} live demo (opens in new tab)"
              class="link primary"
            >
              Live demo
              <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={extIcon} />
              </svg>
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View {project.name} repository on GitHub (opens in new tab)"
              class="link"
            >
              Source
              <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={extIcon} />
              </svg>
            </a>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition:
      border-color 0.25s ease,
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .card:hover {
    border-color: color-mix(in oklch, var(--primary) 32%, var(--hairline));
    transform: translateY(-2px);
    box-shadow:
      var(--shadow-card),
      0 18px 40px -24px oklch(0 0 0 / 0.5);
  }

  /* ---- Thumbnail with browser chrome ---- */
  .thumb {
    display: block;
    position: relative;
    background: var(--sunken);
    border-bottom: 1px solid var(--hairline);
    overflow: hidden;
  }

  .chrome {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 0.6rem;
    height: 26px;
    background: var(--sunken);
    border-bottom: 1px solid var(--hairline);
  }

  .dots {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .dots i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: color-mix(in oklch, var(--foreground) 22%, transparent);
  }

  .host {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.02em;
    color: var(--muted-foreground);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .thumb img {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.4s cubic-bezier(0.22, 0.8, 0.3, 1);
  }

  .card:hover .thumb img {
    transform: scale(1.03);
  }

  /* ---- Body ---- */
  .body {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding: 1.15rem 1.25rem 1.25rem;
    flex: 1;
  }

  .name {
    font-family: var(--font-mono);
    font-size: var(--text-md);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--foreground);
  }

  .desc {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    line-height: 1.7;
    color: var(--muted-foreground);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 0.4rem;
  }

  .link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    font-weight: 500;
    letter-spacing: 0.02em;
    padding: 0.4rem 0.7rem;
    border-radius: var(--radius);
    border: 1px solid var(--border-interactive);
    color: var(--foreground);
    text-decoration: none;
    transition:
      border-color 0.18s ease,
      background-color 0.18s ease,
      color 0.18s ease;
  }

  .link svg {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }

  .link:hover {
    border-color: color-mix(in oklch, var(--primary) 50%, transparent);
    color: var(--primary);
  }

  .link.primary {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--primary-foreground);
  }

  .link.primary:hover {
    background: color-mix(in oklch, var(--primary) 88%, var(--foreground));
    color: var(--primary-foreground);
  }

  .link:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  .link.primary:focus-visible {
    outline-color: var(--primary-foreground);
  }

  @media (min-width: 760px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
