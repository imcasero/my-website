<script lang="ts">
    interface Props {
        num: string;
        label: string;
        id: string;
    }

    let { num, label, id }: Props = $props();
</script>

<header class="sec-head">
    <span class="num" aria-hidden="true">{num}</span>
    <h2 {id} class="label">{label}</h2>
    <span class="rule" aria-hidden="true"></span>
</header>

<style>
    .sec-head {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.75rem;
    }

    .num {
        font-family: var(--font-mono);
        font-size: var(--text-2xs);
        font-weight: 700;
        color: var(--role-prompt);
        letter-spacing: 0.04em;
        flex-shrink: 0;
    }

    .label {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        color: var(--foreground);
        flex-shrink: 0;
    }

    .rule {
        flex: 1;
        height: 1px;
        background: var(--hairline);
        min-width: 1rem;
    }
</style>
