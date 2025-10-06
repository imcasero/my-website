# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

All commands should be run from the root directory using `pnpm`:

- **Development server**: `pnpm dev` - Starts local server at `localhost:4321`
- **Build**: `pnpm build` - Builds production site to `./dist/`
- **Preview**: `pnpm preview` - Preview production build locally
- **Format**: `prettier --write .` - Format code using Prettier

## Technology Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x (via Vite plugin)
- **Package Manager**: pnpm
- **Code Formatting**: Prettier with `prettier-plugin-astro`

## Architecture

### Theme System

The site implements a custom light/dark theme system:

- Theme state is managed via `data-theme` attribute on `<html>` element
- CSS custom properties defined in `src/styles/global.css` with `:root` (light) and `[data-theme='dark']` (dark) selectors
- Theme toggle button in `src/layouts/Layout.astro` with View Transitions API support
- Theme preference persists in localStorage and respects system preference as fallback
- Custom Tailwind variant `dark` defined in `global.css` for theme-aware styling: `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *))`

### Component Structure

- **Layout**: Single `src/layouts/Layout.astro` wraps all pages with theme toggle
- **Bento Grid**: Main layout pattern using responsive CSS Grid in `src/components/Bento/Bento.astro`
  - Desktop: 3-column grid with variable column spans (1 or 2 columns)
  - Mobile/Tablet: Responsive breakpoints collapse to 1-2 columns
  - Projects section uses 4-column grid below main content
- **Icons**: SVG components in `src/components/Icons/`

### Styling Approach

Tailwind CSS 4 is integrated via Vite plugin (configured in `astro.config.mjs`). The theme uses:

- CSS custom properties for design tokens (colors, font sizes)
- Tailwind utility classes mapped to custom properties via `@theme inline` directive
- Global transitions for smooth theme switching (0.3s ease on background, color, border)

### Prettier Configuration

- Single quotes, semicolons enabled
- 2-space indentation, 80-character line width
- ES5 trailing commas
- Astro files use dedicated parser via plugin
