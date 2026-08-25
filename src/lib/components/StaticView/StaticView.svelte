<script lang="ts">
    import { reveal } from "$lib/actions/reveal";
    import About from "./About/About.svelte";
    import Contact from "./Contact/Contact.svelte";
    import Experience from "./Experience/Experience.svelte";
    import Projects from "./Projects/Projects.svelte";
    import TechStack from "./TechStack/TechStack.svelte";
    import Footer from "./Footer/Footer.svelte";
</script>

<div class="sections">
    <div use:reveal><About /></div>
    <div use:reveal><Experience /></div>
    <div use:reveal><Projects /></div>
    <div use:reveal><TechStack /></div>
    <div use:reveal><Contact /></div>
    <div use:reveal><Footer /></div>
</div>

<style>
    .sections {
        display: flex;
        flex-direction: column;
        gap: var(--space-section);
    }
</style>
