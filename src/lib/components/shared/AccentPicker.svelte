<script lang="ts">
  import { accent, THEME_PRESETS, type ThemeName } from "$lib/stores/accent.svelte";

  let open = $state(false);
  const themeEntries = Object.entries(THEME_PRESETS) as [ThemeName, (typeof THEME_PRESETS)[ThemeName]][];

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

<div class="relative">
  <button
    onclick={() => (open = !open)}
    class="theme-btn flex items-center gap-2 px-3 py-1.5 font-mono text-xs
           border border-border bg-card text-foreground
           hover:border-primary transition-colors duration-150
           focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
    aria-label="Select color theme"
    aria-expanded={open}
    aria-haspopup="listbox"
  >
    <span class="btn-prefix">
      <span class="prompt-dollar">$</span>
      <span class="text-muted-foreground">theme</span>
      <span class="separator">:</span>
    </span>
    <span class="theme-name">{currentPreset.label}</span>
    <span class="swatches">
      {#each currentPreset.swatches as swatch}
        <span class="swatch" style="background: {swatch}"></span>
      {/each}
    </span>
    <span class="chevron text-muted-foreground">{open ? "▴" : "▾"}</span>
  </button>

  {#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="fixed inset-0 z-40"
      onclick={() => (open = false)}
    ></div>

    <div
      role="listbox"
      aria-label="Color themes"
      class="dropdown absolute right-0 top-full mt-1 z-50
             border border-border bg-card
             min-w-[210px] py-1 font-mono text-xs
             shadow-xl"
    >
      <div class="dropdown-header px-3 py-1.5 text-muted-foreground border-b border-border mb-1">
        -- select theme --
      </div>
      {#each themeEntries as [name, preset]}
        {@const isSelected = accent.current === name}
        <button
          role="option"
          aria-selected={isSelected}
          onclick={() => selectTheme(name)}
          class="option w-full flex items-center gap-2 px-3 py-1.5 text-left
                 hover:bg-muted transition-colors duration-75
                 {isSelected ? 'option--selected' : ''}"
        >
          <span class="check w-3 text-center">
            {#if isSelected}<span class="text-primary">✓</span>{/if}
          </span>
          <span class="flex-1 {isSelected ? 'text-primary' : 'text-foreground'}"
            >{preset.label}</span
          >
          <span class="swatches">
            {#each preset.swatches as swatch}
              <span
                class="swatch {isSelected ? 'swatch--active' : ''}"
                style="background: {swatch}"
              ></span>
            {/each}
          </span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .theme-btn {
    border-radius: 3px;
    letter-spacing: 0.02em;
  }

  .prompt-dollar {
    color: var(--terminal-prompt);
    font-weight: 700;
  }

  .separator {
    color: var(--muted-foreground);
    margin: 0 -2px;
  }

  .theme-name {
    color: var(--terminal-success);
    font-weight: 700;
  }

  .swatches {
    display: flex;
    gap: 2px;
    align-items: center;
  }

  .swatch {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .swatch--active {
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
  }

  .chevron {
    font-size: 8px;
    margin-left: 2px;
  }

  .dropdown {
    border-radius: 4px;
    backdrop-filter: blur(4px);
  }

  .dropdown-header {
    font-size: 10px;
    letter-spacing: 0.05em;
    opacity: 0.6;
  }

  .option {
    border-radius: 0;
    font-size: 11px;
    letter-spacing: 0.02em;
  }

  .option--selected {
    background-color: color-mix(in oklch, var(--primary) 8%, transparent);
  }

  @media (max-width: 540px) {
    .btn-prefix {
      display: none;
    }
  }

  @media (max-width: 400px) {
    .theme-name {
      display: none;
    }
  }
</style>
