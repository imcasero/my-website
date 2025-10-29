<script>
  import Card from "../shared/Card.svelte";
  import Command from "../shared/Command.svelte";

  const contacts = [
    {
      platform: "email",
      label: "Email",
      value: "diegocaserosmr@gmail.com",
      url: "mailto:diegocaserosmr@gmail.com",
      icon: "📧",
    },
    {
      platform: "github",
      label: "GitHub",
      value: "github.com/imcasero",
      url: "https://github.com/imcasero",
      icon: "💻",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/imcasero",
      url: "https://linkedin.com/in/imcasero",
      icon: "💼",
    },
  ];
</script>

<Card>
  <h2 class="text-2xl">/contact</h2>
  <div>
    <Command prompt="./connect.sh --social">
      <div class="flex flex-col gap-3 font-mono text-sm">
        {#each contacts as contact}
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <span class="text-primary">[{contact.platform}]</span>
              <span class="text-muted-foreground">→</span>
              <span class="text-foreground">{contact.label}</span>
            </div>
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my {contact.label} profile (opens in new tab)"
              aria-label="Visit my {contact.label} profile at {contact.value} (external link, opens in new tab)"
              class="text-muted-foreground hover:text-primary transition-colors ml-2 flex items-center gap-2
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
            >
              <span class="text-primary">→</span>
              <span>{contact.value}</span>
              <svg
                class="w-3.5 h-3.5 flex-shrink-0"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>
