<script lang="ts">
  import About from "./About.svelte";
  import Contact from "./Contact.svelte";
  import Experience from "./Experience.svelte";
  import Profile from "./Profile.svelte";
  import Projects from "./Projects.svelte";
  import TechStack from "./TechStack.svelte";
</script>

<section class="w-full mx-auto space-y-8 mt-12">
  <div class="w-full lg:w-1/2 mx-auto flex flex-col gap-4">
    <Profile />
    <About />
    <Experience />
    <TechStack />
    <Projects />
    <Contact />
  </div>
  <footer class="w-full pt-6 pb-8 mt-12">
    <div class="w-full flex flex-col items-center gap-3">
      <code class="text-sm text-muted-foreground"
        >> thanks for visiting — star the repo?</code
      >
      <a
        href="https://github.com/imcasero/my-website"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs hover:text-primary hover:border-primary transition-colors"
        aria-label="Star imcasero/my-website on GitHub"
        title="Star imcasero/my-website on GitHub"
      >
        <span style="font-size: 1.1em;" aria-hidden="true">⭐</span>
        <span>Star imcasero/my-website</span>
      </a>
    </div>
  </footer>
</section>
