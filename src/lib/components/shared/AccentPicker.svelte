<script lang="ts">
  import { accent, THEME_PRESETS, type ThemeName } from "$lib/stores/accent.svelte";

  let open = $state(false);
  const themeEntries = Object.entries(THEME_PRESETS) as [
    ThemeName,
    (typeof THEME_PRESETS)[ThemeName],
  ][];

  function selectTheme(name: ThemeName) {
    accent.set(name);
    open = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") open = false;
  }

  let currentPreset = $derived(THEME_PRESETS[accent.current]);
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="picker">
  <button
    type="button"
    onclick={() => (open = !open)}
    class="trigger"
    aria-label="Select colour theme"
    aria-expanded={open}
    aria-haspopup="listbox"
  >
    <span class="swatches">
      {#each currentPreset.swatches as swatch}
        <span class="swatch" style="background: {swatch}"></span>
      {/each}
    </span>
    <span class="name">{currentPreset.label}</span>
    <span class="chevron" aria-hidden="true">{open ? "▴" : "▾"}</span>
  </button>

  {#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="scrim" onclick={() => (open = false)}></div>

    <div role="listbox" aria-label="Colour themes" class="dropdown">
      <p class="dropdown-header">-- select theme --</p>
      {#each themeEntries as [name, preset]}
        {@const isSelected = accent.current === name}
        <button
          type="button"
          role="option"
          aria-selected={isSelected}
          onclick={() => selectTheme(name)}
          class="option"
          class:selected={isSelected}
        >
          <span class="check" aria-hidden="true">{isSelected ? "✓" : ""}</span>
          <span class="option-name">{preset.label}</span>
          <span class="swatches">
            {#each preset.swatches as swatch}
              <span class="swatch" style="background: {swatch}"></span>
            {/each}
          </span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .picker {
    position: relative;
    flex: 1;
    min-width: 0;
  }

  .trigger {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.45rem;
    height: 32px;
    padding: 0 0.55rem;
    font-family: var(--font-mono);
    font-size: var(--text-2xs);
    letter-spacing: 0.03em;
    border: 1px solid var(--border-interactive);
    border-radius: var(--radius);
    background: var(--card);
    color: var(--foreground);
    cursor: pointer;
    white-space: nowrap;
    transition: border-color 0.18s ease;
  }

  .trigger:hover {
    border-color: color-mix(in oklch, var(--primary) 45%, transparent);
  }

  .trigger:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  .name {
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .chevron {
    font-size: 8px;
    color: var(--muted-foreground);
  }

  .swatches {
    display: flex;
    gap: 2px;
    align-items: center;
    flex-shrink: 0;
  }

  .swatch {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .scrim {
    position: fixed;
    inset: 0;
    z-index: 40;
  }

  .dropdown {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(100% + 4px);
    z-index: 50;
    min-width: 12rem;
    padding: 0.25rem;
    border: 1px solid var(--border-interactive);
    border-radius: var(--radius);
    background: var(--popover);
    box-shadow: var(--shadow-card);
    font-family: var(--font-mono);
  }

  .dropdown-header {
    padding: 0.3rem 0.5rem 0.4rem;
    font-size: 10px;
    letter-spacing: 0.05em;
    color: var(--muted-foreground);
    border-bottom: 1px solid var(--hairline);
    margin-bottom: 0.25rem;
  }

  .option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.5rem;
    font-size: 11px;
    letter-spacing: 0.02em;
    text-align: left;
    background: transparent;
    border: none;
    border-radius: 2px;
    color: var(--foreground);
    cursor: pointer;
    transition: background-color 0.12s ease;
  }

  .option:hover {
    background: color-mix(in oklch, var(--foreground) 7%, transparent);
  }

  .option.selected {
    background: color-mix(in oklch, var(--primary) 12%, transparent);
    color: var(--primary);
  }

  .option:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: -2px;
  }

  .check {
    width: 0.75rem;
    color: var(--primary);
  }

  .option-name {
    flex: 1;
  }

  /* Below the rail breakpoint the picker sits in a horizontal row, so the
       menu opens downward and does not need to stretch. */
  @media (max-width: 1023px) {
    .picker {
      flex: 0 1 auto;
    }

    .dropdown {
      left: auto;
      right: 0;
      top: calc(100% + 4px);
      bottom: auto;
    }
  }
</style>
