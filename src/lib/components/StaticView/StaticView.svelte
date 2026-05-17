<script lang="ts">
    import About from "./About/About.svelte";
    import Contact from "./Contact/Contact.svelte";
    import Experience from "./Experience/Experience.svelte";
    import Profile from "./Profile/Profile.svelte";
    import Projects from "./Projects/Projects.svelte";
    import TechStack from "./TechStack/TechStack.svelte";
    import Footer from "./Footer/Footer.svelte";
</script>

<section class="w-full flex flex-col gap-3 mt-4 pb-12">
    <Profile />
    <About />
    <Experience />
    <Projects />
    <TechStack />
    <Contact />
    <Footer />
</section>
