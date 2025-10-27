import { describe, it, expect, beforeEach } from 'vitest';
import { currentMode } from './mode.svelte';

describe('Mode Store', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Initialization', () => {
    it('should initialize with "static" mode by default', () => {
      expect(currentMode.current).toBe('static');
    });

    it('should load the saved mode from localStorage', () => {
      localStorage.setItem('mode', 'terminal');
      expect(localStorage.getItem('mode')).toBe('terminal');
    });
  });

  describe('Setter', () => {
    it('should update the mode to "terminal"', () => {
      currentMode.set('terminal');
      expect(currentMode.current).toBe('terminal');
    });

    it('should update the mode to "static"', () => {
      currentMode.set('static');
      expect(currentMode.current).toBe('static');
    });

    it('should persist the mode in localStorage', () => {
      currentMode.set('terminal');
      expect(localStorage.getItem('mode')).toBe('terminal');

      currentMode.set('static');
      expect(localStorage.getItem('mode')).toBe('static');
    });
  });

  describe('Toggle', () => {
    it('should toggle from "static" to "terminal"', () => {
      currentMode.set('static');
      currentMode.toggle();
      expect(currentMode.current).toBe('terminal');
    });

    it('should toggle from "terminal" to "static"', () => {
      currentMode.set('terminal');
      currentMode.toggle();
      expect(currentMode.current).toBe('static');
    });

    it('should persist the change in localStorage when toggling', () => {
      currentMode.set('static');
      currentMode.toggle();
      expect(localStorage.getItem('mode')).toBe('terminal');

      currentMode.toggle();
      expect(localStorage.getItem('mode')).toBe('static');
    });
  });

  describe('Reactivity', () => {
    it('should be reactive to multiple changes', () => {
      currentMode.set('static');
      expect(currentMode.current).toBe('static');

      currentMode.set('terminal');
      expect(currentMode.current).toBe('terminal');

      currentMode.toggle();
      expect(currentMode.current).toBe('static');

      currentMode.toggle();
      expect(currentMode.current).toBe('terminal');
    });
  });

  describe('Valid states', () => {
    it('should handle only valid Mode values', () => {
      currentMode.set('static');
      expect(currentMode.current).toBe('static');

      currentMode.set('terminal');
      expect(currentMode.current).toBe('terminal');
    });
  });
});
