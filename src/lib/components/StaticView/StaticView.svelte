<script lang="ts">
    import About from "./About.svelte";
    import Contact from "./Contact.svelte";
    import Experience from "./Experience.svelte";
    import Profile from "./Profile.svelte";
    import Projects from "./Projects.svelte";
    import TechStack from "./TechStack.svelte";
    import Footer from "./Footer.svelte";
</script>

<section class="w-full flex flex-col gap-3 mt-4 pb-12">
    <Profile />
    <About />
    <Experience />
    <TechStack />
    <Projects />
    <Contact />
    <Footer />
</section>
