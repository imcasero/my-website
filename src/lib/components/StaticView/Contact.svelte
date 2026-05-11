<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";

  const contacts = [
    { platform: "email", label: "Email", value: "diegocaserosmr@gmail.com", url: "mailto:diegocaserosmr@gmail.com" },
    { platform: "github", label: "GitHub", value: "github.com/imcasero", url: "https://github.com/imcasero" },
    { platform: "linkedin", label: "LinkedIn", value: "linkedin.com/in/imcasero", url: "https://linkedin.com/in/imcasero" },
  ];

  const extIcon = `M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`;
</script>

<Card>
  <h2 class="section-title">
    <span class="indicator">●</span>/contact
  </h2>
  <Command prompt="./connect.sh --social">
    <div class="flex flex-col gap-4 font-mono">
      {#each contacts as contact}
        <div class="contact-entry">
          <div class="contact-header">
            <span class="platform">[{contact.platform}]</span>
            <span class="sep">→</span>
            <span class="label">{contact.label}</span>
          </div>
          <a
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my {contact.label} profile at {contact.value} (opens in new tab)"
            class="contact-link"
          >
            <span class="arr">→</span>
            <span class="value">{contact.value}</span>
            <svg class="w-3 h-3 flex-shrink-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={extIcon}/>
            </svg>
          </a>
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

  .contact-entry {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .contact-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
  }

  .platform {
    color: var(--terminal-warning);
    font-weight: 700;
  }

  .sep {
    color: var(--terminal-comment);
  }

  .label {
    color: var(--primary);
    font-weight: 600;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-left: 0.75rem;
    color: var(--foreground);
    opacity: 0.7;
    text-decoration: none;
    font-size: 0.82rem;
    transition: color 0.15s ease;
  }

  .contact-link:hover .value {
    color: var(--terminal-prompt);
  }

  .arr {
    color: var(--terminal-prompt);
    font-weight: 700;
    flex-shrink: 0;
  }

  .value {
    transition: color 0.15s ease;
  }
</style>
