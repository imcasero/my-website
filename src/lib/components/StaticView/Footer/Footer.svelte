<footer class="footer">
  <p class="note">
    <span class="dollar" aria-hidden="true">$</span> thanks for visiting — star the repo?
  </p>
  <a
    href="https://github.com/imcasero/my-website"
    target="_blank"
    rel="noopener noreferrer"
    class="footer-link"
    aria-label="Star imcasero/my-website on GitHub (external link, opens in new tab)"
    title="Star imcasero/my-website on GitHub (opens in new tab)"
  >
    <span aria-hidden="true">★</span>
    <span>Star imcasero/my-website</span>
    <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</footer>

<style>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--hairline);
  }

  .note {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--role-meta);
  }

  .dollar {
    color: var(--role-prompt);
    font-weight: 700;
    margin-right: 0.4em;
  }

  .footer-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 0.8rem;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    border: 1px solid var(--border-interactive);
    border-radius: var(--radius);
    color: var(--muted-foreground);
    text-decoration: none;
    transition:
      color 0.18s ease,
      border-color 0.18s ease;
  }

  .footer-link svg {
    width: 0.85rem;
    height: 0.85rem;
    flex-shrink: 0;
  }

  .footer-link:hover {
    color: var(--primary);
    border-color: color-mix(in oklch, var(--primary) 50%, transparent);
  }

  .footer-link:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
</style>
