<script lang="ts">
  import About from "./About.svelte";
  import Profile from "./Profile.svelte";
  import Stats from "./Stats.svelte";
  import TechStack from "./TechStack.svelte";
</script>

<section class="w-full mx-auto space-y-8 mt-12">
  <div class="w-full lg:w-1/2 mx-auto flex flex-col gap-4">
    <Profile />
    <About />
    <Stats />
    <TechStack />
  </div>
</section>
