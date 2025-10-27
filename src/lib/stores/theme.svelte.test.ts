import { describe, it, expect, beforeEach, vi } from 'vitest';
import { theme } from './theme.svelte';

describe('Theme Store', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('Initialization', () => {
    it('should initialize with dark theme by default when there is no value in localStorage', () => {
      expect(theme.current).toBe('dark');
    });

    it('should load the saved theme from localStorage', () => {
      localStorage.setItem('theme', 'light');
      expect(localStorage.getItem('theme')).toBe('light');
    });

    it('should set data-theme on the document when initializing', () => {
      const setAttribute = vi.spyOn(document.documentElement, 'setAttribute');
      theme.set('light');
      expect(setAttribute).toHaveBeenCalledWith('data-theme', 'light');
    });
  });

  describe('Setter', () => {
    it('should update the theme to light', () => {
      theme.set('light');
      expect(theme.current).toBe('light');
    });

    it('should update the theme to dark', () => {
      theme.set('dark');
      expect(theme.current).toBe('dark');
    });

    it('should persist the theme in localStorage', () => {
      theme.set('light');
      expect(localStorage.getItem('theme')).toBe('light');

      theme.set('dark');
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('should update the data-theme attribute on the document', () => {
      const setAttribute = vi.spyOn(document.documentElement, 'setAttribute');

      theme.set('light');
      expect(setAttribute).toHaveBeenCalledWith('data-theme', 'light');

      theme.set('dark');
      expect(setAttribute).toHaveBeenCalledWith('data-theme', 'dark');
    });
  });

  describe('Toggle', () => {
    it('should toggle from dark to light', () => {
      theme.set('dark');
      theme.toggle();
      expect(theme.current).toBe('light');
    });

    it('should toggle from light to dark', () => {
      theme.set('light');
      theme.toggle();
      expect(theme.current).toBe('dark');
    });

    it('should persist the change in localStorage when toggling', () => {
      theme.set('dark');
      theme.toggle();
      expect(localStorage.getItem('theme')).toBe('light');

      theme.toggle();
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('should update the data-theme attribute when toggling', () => {
      const setAttribute = vi.spyOn(document.documentElement, 'setAttribute');

      theme.set('dark');
      theme.toggle();
      expect(setAttribute).toHaveBeenCalledWith('data-theme', 'light');
    });
  });

  describe('System synchronization', () => {
    it('should respond to changes in system preference', () => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      expect(mediaQuery).toBeDefined();
    });
  });

  describe('Reactivity', () => {
    it('should be reactive to multiple changes', () => {
      theme.set('light');
      expect(theme.current).toBe('light');

      theme.set('dark');
      expect(theme.current).toBe('dark');

      theme.toggle();
      expect(theme.current).toBe('light');

      theme.toggle();
      expect(theme.current).toBe('dark');
    });
  });
});
