<script lang="ts">
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import Experience from "./Experience.svelte";
  import Profile from "./Profile.svelte";
  import Projects from "./Projects.svelte";
  import TechStack from "./TechStack.svelte";
</script>

<section class="w-full flex flex-col gap-3 mt-4 pb-12">
  <Profile />
  <About />
  <Experience />
  <TechStack />
  <Projects />
  <Contact />

  <footer class="pt-8 pb-4 flex flex-col items-center gap-3">
    <code class="text-sm" style="color: var(--terminal-comment)">> thanks for visiting — star the repo?</code>
    <a
      href="https://github.com/imcasero/my-website"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-link inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono
             border border-border hover:border-primary transition-colors
             focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Star imcasero/my-website on GitHub (external link, opens in new tab)"
      title="Star imcasero/my-website on GitHub (opens in new tab)"
    >
      <span aria-hidden="true">⭐</span>
      <span>Star imcasero/my-website</span>
      <svg class="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </a>
  </footer>
</section>

<style>
  .footer-link {
    border-radius: 3px;
    color: var(--muted-foreground);
  }

  .footer-link:hover {
    color: var(--terminal-prompt);
  }
</style>
