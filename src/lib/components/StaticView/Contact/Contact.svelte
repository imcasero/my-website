<script lang="ts">
    import SectionHeading from "$lib/components/shared/SectionHeading.svelte";

    const contacts = [
        {
            label: "Email",
            value: "diegocaserosmr@gmail.com",
            url: "mailto:diegocaserosmr@gmail.com",
        },
        {
            label: "GitHub",
            value: "github.com/imcasero",
            url: "https://github.com/imcasero",
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/imcasero",
            url: "https://linkedin.com/in/imcasero",
        },
    ];

    const extIcon = `M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14`;
</script>

<section id="contact" aria-labelledby="contact-heading">
    <SectionHeading path="contact" id="contact-heading" />

    <ul class="rows">
        {#each contacts as contact}
            <li>
                <a
                    href={contact.url}
                    target={contact.url.startsWith("mailto:") ? null : "_blank"}
                    rel="noopener noreferrer"
                    aria-label="{contact.label}: {contact.value}"
                    class="row"
                >
                    <span class="meta label">{contact.label}</span>
                    <span class="value">{contact.value}</span>
                    <svg
                        class="ext"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d={extIcon}
                        />
                    </svg>
                </a>
            </li>
        {/each}
    </ul>
</section>

<style>
    .rows {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: grid;
        grid-template-columns: 6.5rem minmax(0, 1fr) auto;
        align-items: baseline;
        gap: 1rem;
        padding: 0.9rem 0;
        border-bottom: 1px solid var(--hairline);
        text-decoration: none;
        color: var(--foreground);
        transition: color 0.18s ease;
    }

    .rows li:first-child .row {
        border-top: 1px solid var(--hairline);
    }

    .label {
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .value {
        font-family: var(--font-mono);
        font-size: var(--text-base);
        overflow-wrap: anywhere;
    }

    .ext {
        width: 0.85rem;
        height: 0.85rem;
        flex-shrink: 0;
        color: var(--role-meta);
        transition: color 0.18s ease;
        align-self: center;
    }

    .row:hover {
        color: var(--primary);
    }

    .row:hover .ext {
        color: var(--primary);
    }

    .row:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
        border-radius: 2px;
    }

    @media (max-width: 520px) {
        .row {
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 0.25rem 0.75rem;
        }

        .label {
            grid-column: 1 / -1;
        }
    }
</style>
