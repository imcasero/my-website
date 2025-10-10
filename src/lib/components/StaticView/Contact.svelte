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
              class="text-muted-foreground hover:text-primary transition-colors ml-2 flex items-center gap-2"
            >
              <span class="text-primary">→</span>
              <span>{contact.value}</span>
            </a>
          </div>
        {/each}
      </div>
    </Command>
  </div>
</Card>
