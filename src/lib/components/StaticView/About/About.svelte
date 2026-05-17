<script>
    import Card from "../../shared/Card.svelte";
    import Command from "../../shared/Command.svelte";
</script>

<Card>
    <h2 class="section-title">
        <span class="indicator">●</span>/about
    </h2>
    <Command prompt="cat ~/about.txt">
        <div class="about-body">
            <p>
                At <span class="accent">15</span>, I discovered programming —
                and there was no turning back. It is a field where
                <span class="accent">learning never stops</span>, and where
                every problem solved reveals new ones to tackle. That constant
                evolution is what keeps me obsessed.
            </p>
            <p>
                What drew me to the <span class="accent">frontend</span> was
                bridging technical complexity with user-facing simplicity —
                building interfaces that hide intricate logic behind intuitive
                experiences. Early in my career, solving problems independently
                by reading others code taught me the importance of
                <span class="accent">coding for the next developer</span> and not
                to prove that I'm clever.
            </p>
            <p>
                I work best in <span class="accent">teams</span> — I learn more
                from
                <span class="accent">listening to others and sharing ideas</span
                > than from coding alone.
            </p>
            <p>
                Always seeking <span class="accent">challenges</span> to keep growing.
            </p>
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

    .about-body {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        font-size: 0.875rem;
        line-height: 1.75;
        color: var(--foreground);
    }

    .accent {
        color: var(--terminal-prompt);
        font-weight: 600;
        transition: color 0.3s ease;
    }
</style>
