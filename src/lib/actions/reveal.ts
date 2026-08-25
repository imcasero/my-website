interface RevealOptions {
  /** Stagger in ms applied as a transition delay. */
  delay?: number;
}

/**
 * Reveals a node once it scrolls into view. No-ops (showing content
 * immediately) when the user prefers reduced motion.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  if (typeof IntersectionObserver === "undefined") {
    node.classList.add("revealed");
    return;
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    node.classList.add("reveal", "revealed");
    return;
  }

  node.classList.add("reveal");
  if (options.delay) {
    node.style.transitionDelay = `${options.delay}ms`;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add("revealed");
          observer.disconnect();
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
  );

  observer.observe(node);

  return {
    destroy: () => observer.disconnect(),
  };
}
