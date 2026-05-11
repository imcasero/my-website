<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";

  const contacts = [
    {
      platform: "email",
      label: "Email",
      value: "diegocaserosmr@gmail.com",
      url: "mailto:diegocaserosmr@gmail.com",
    },
    {
      platform: "github",
      label: "GitHub",
      value: "github.com/imcasero",
      url: "https://github.com/imcasero",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/imcasero",
      url: "https://linkedin.com/in/imcasero",
    },
  ];
</script>

<Card>
  <h2 class="section-title">/contact</h2>
  <div>
    <Command prompt="./connect.sh --social">
      <div class="flex flex-col gap-3 font-mono text-sm">
        {#each contacts as contact}
          <div class="contact-entry flex flex-col gap-0.5">
            <div class="flex items-center gap-2">
              <span class="platform">[{contact.platform}]</span>
              <span class="sep">→</span>
              <span class="label">{contact.label}</span>
            </div>
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my {contact.label} profile (opens in new tab)"
              aria-label="Visit my {contact.label} profile at {contact.value} (external link, opens in new tab)"
              class="contact-link ml-2 flex items-center gap-1.5"
            >
              <span class="arrow">→</span>
              <span class="value">{contact.value}</span>
              <svg class="w-3 h-3 flex-shrink-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>

<style>
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--terminal-prompt);
    letter-spacing: -0.01em;
  }

  .platform {
    color: var(--terminal-warning);
    font-weight: 700;
  }

  .sep {
    color: var(--terminal-comment);
  }

  .label {
    color: var(--terminal-success);
    font-weight: 600;
  }

  .contact-link {
    color: var(--muted-foreground);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .contact-link:hover .value {
    color: var(--terminal-prompt);
  }

  .arrow {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .value {
    transition: color 0.15s ease;
  }
</style>
