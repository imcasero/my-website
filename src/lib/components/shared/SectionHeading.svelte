<script lang="ts">
  interface Props {
    /** Path segment under ~, e.g. "about" -> ~/about */
    path: string;
    id: string;
  }

  let { path, id }: Props = $props();
</script>

<header class="sec-head">
  <h2 {id} class="path">
    <span class="home" aria-hidden="true">~/</span>{path}
  </h2>
  <span class="rule" aria-hidden="true"></span>
</header>

<style>
  .sec-head {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.75rem;
  }

  .path {
    font-family: var(--font-mono);
    font-size: var(--text-base);
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--foreground);
    flex-shrink: 0;
  }

  .home {
    color: var(--role-prompt);
    font-weight: 400;
  }

  .rule {
    flex: 1;
    height: 1px;
    background: var(--hairline);
    min-width: 1rem;
  }
</style>
