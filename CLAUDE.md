# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Svelte and TypeScript type checking

## Project Architecture

This is a Svelte 5 + TypeScript + Vite application recently migrated from Astro. It uses Tailwind CSS v4 for styling with a custom theme system.

**Important**: This project uses modern Svelte 5 syntax with runes (NOT legacy mode). All new code must use:
- `$state()` for reactive state
- `$derived()` for computed values
- `onclick` instead of `on:click` for event handlers
- Direct property access instead of store subscriptions

### Path Aliases

- `$lib` - Resolves to `src/lib/` for cleaner imports
- Import components as `$lib/components/...` instead of relative paths

### Core State Management

The application uses Svelte 5 runes-based state management (not traditional stores):

**Theme State** (`src/lib/stores/theme.svelte.ts`):
- Uses `$state()` rune for reactive theme state
- Manages light/dark theme switching
- Persists to localStorage as `theme`
- Syncs with system preference when no stored value exists
- Updates `data-theme` attribute on `document.documentElement`
- Automatically responds to system theme changes
- Exposed API: `theme.current` (getter), `theme.set(value)`, `theme.toggle()`

**Mode State** (`src/lib/stores/mode.svelte.ts`):
- Uses `$state()` rune for reactive mode state
- Toggles between "static" and "terminal" view modes
- Persists to localStorage as `mode`
- Defaults to "static" mode
- Exposed API: `currentMode.current` (getter), `currentMode.set(value)`, `currentMode.toggle()`

**Note**: State files use `.svelte.ts` extension to enable runes support outside `.svelte` components.

### Theming System

Themes are implemented using CSS custom properties (CSS variables) in `src/app.css`:

- Theme switching controlled via `data-theme` attribute (not classes)
- Uses OKLCH color space for all color definitions
- Two theme variants: light (`[data-theme="light"]`) and dark (`[data-theme="dark"]`)
- Separate color systems for base UI and terminal views
- Terminal colors include: `--terminal-bg`, `--terminal-text`, `--terminal-prompt`, `--terminal-error`, `--terminal-success`, `--terminal-warning`, `--terminal-comment`, `--terminal-cursor`
- Tailwind v4 configured with `@theme inline` to expose CSS variables as Tailwind utilities

### Component Structure

- Shared components in `src/lib/components/shared/`
- Components use Svelte 5 runes: `$derived()` for reactive computations
- Access state via `.current` property (e.g., `theme.current`)
- ThemeToggle and ModeToggle use modern `onclick` event syntax

### Styling Conventions

- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Animation utilities from `tw-animate-css`
- Custom terminal animations defined in `app.css` (`cursor-blink`, `typing`, `slide-up`)
- Utility classes for terminal effects: `.terminal-container`, `.terminal-prompt`, `.terminal-error`, etc.
- Font families: `--font-mono` (JetBrains Mono, Fira Code fallbacks) and `--font-sans` (system fonts)
