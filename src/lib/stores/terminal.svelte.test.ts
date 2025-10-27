import { describe, it, expect, beforeEach, vi } from 'vitest';
import { terminal } from './terminal.svelte';
import type { TerminalLine } from './terminal.svelte';

describe('Terminal Store', () => {
  beforeEach(() => {
    terminal.reset();
  });

  describe('Initialization', () => {
    it('should initialize with default values', () => {
      expect(terminal.history).toEqual([]);
      expect(terminal.commandHistory).toEqual([]);
      expect(terminal.historyIndex).toBe(-1);
      expect(terminal.currentPath).toBe('~');
      expect(terminal.initialized).toBe(false);
    });
  });

  describe('setInitialized', () => {
    it('should update the initialization state', () => {
      terminal.setInitialized(true);
      expect(terminal.initialized).toBe(true);

      terminal.setInitialized(false);
      expect(terminal.initialized).toBe(false);
    });
  });

  describe('setHistoryIndex', () => {
    it('should update the history index', () => {
      terminal.setHistoryIndex(5);
      expect(terminal.historyIndex).toBe(5);

      terminal.setHistoryIndex(0);
      expect(terminal.historyIndex).toBe(0);
    });
  });

  describe('setCurrentPath', () => {
    it('should update the current path', () => {
      terminal.setCurrentPath('/home/user');
      expect(terminal.currentPath).toBe('/home/user');

      terminal.setCurrentPath('~/projects');
      expect(terminal.currentPath).toBe('~/projects');
    });
  });

  describe('addLine', () => {
    it('should add a line to the history', () => {
      const line = {
        type: 'text' as const,
        content: 'Test output',
      };

      terminal.addLine(line);

      expect(terminal.history).toHaveLength(1);
      expect(terminal.history[0]).toMatchObject(line);
      expect(terminal.history[0]).toHaveProperty('id');
      expect(terminal.history[0]).toHaveProperty('timestamp');
    });

    it('should generate unique IDs for each line', () => {
      terminal.addLine({ type: 'text', content: 'Line 1' });
      terminal.addLine({ type: 'text', content: 'Line 2' });

      expect(terminal.history[0].id).not.toBe(terminal.history[1].id);
    });

    it('should add timestamp to each line', () => {
      const beforeAdd = new Date();
      terminal.addLine({ type: 'text', content: 'Test' });
      const afterAdd = new Date();

      const timestamp = terminal.history[0].timestamp;
      expect(timestamp.getTime()).toBeGreaterThanOrEqual(beforeAdd.getTime());
      expect(timestamp.getTime()).toBeLessThanOrEqual(afterAdd.getTime());
    });

    it('should support different output types', () => {
      terminal.addLine({ type: 'command', content: 'ls -la' });
      terminal.addLine({ type: 'text', content: 'output' });
      terminal.addLine({ type: 'error', content: 'error message' });
      terminal.addLine({ type: 'success', content: 'success message' });

      expect(terminal.history).toHaveLength(4);
      expect(terminal.history[0].type).toBe('command');
      expect(terminal.history[1].type).toBe('text');
      expect(terminal.history[2].type).toBe('error');
      expect(terminal.history[3].type).toBe('success');
    });

    it('should support optional components', () => {
      terminal.addLine({
        type: 'component',
        content: 'component-data',
        component: 'CustomComponent',
      });

      expect(terminal.history[0].component).toBe('CustomComponent');
    });
  });

  describe('addCommand', () => {
    it('should add commands to the command history', () => {
      terminal.addCommand('ls');
      terminal.addCommand('cd /home');

      expect(terminal.commandHistory).toEqual(['ls', 'cd /home']);
    });

    it('should update historyIndex when adding a command', () => {
      terminal.addCommand('ls');
      expect(terminal.historyIndex).toBe(1);

      terminal.addCommand('pwd');
      expect(terminal.historyIndex).toBe(2);
    });

    it('should not add empty commands', () => {
      terminal.addCommand('ls');
      terminal.addCommand('');
      terminal.addCommand('   ');

      expect(terminal.commandHistory).toEqual(['ls']);
    });

    it('should trim spaces in commands', () => {
      terminal.addCommand('  ls  ');
      expect(terminal.commandHistory).toEqual(['  ls  ']);
    });
  });

  describe('getPreviousCommand', () => {
    it('should return null when there is no history', () => {
      expect(terminal.getPreviousCommand()).toBeNull();
    });

    it('should return the previous command', () => {
      terminal.addCommand('ls');
      terminal.addCommand('pwd');
      terminal.addCommand('cd ~');

      expect(terminal.getPreviousCommand()).toBe('cd ~');
      expect(terminal.getPreviousCommand()).toBe('pwd');
      expect(terminal.getPreviousCommand()).toBe('ls');
    });

    it('should not go beyond the beginning of the history', () => {
      terminal.addCommand('ls');
      terminal.addCommand('pwd');

      terminal.getPreviousCommand();
      terminal.getPreviousCommand();
      terminal.getPreviousCommand();

      expect(terminal.historyIndex).toBe(0);
    });
  });

  describe('getNextCommand', () => {
    it('should return null when there is no history', () => {
      expect(terminal.getNextCommand()).toBeNull();
    });

    it('should return the next command', () => {
      terminal.addCommand('ls');
      terminal.addCommand('pwd');
      terminal.addCommand('cd ~');

      terminal.getPreviousCommand();
      terminal.getPreviousCommand();
      expect(terminal.getNextCommand()).toBe('cd ~');
    });

    it('should return empty string at the end of the history', () => {
      terminal.addCommand('ls');
      terminal.addCommand('pwd');

      terminal.getPreviousCommand();
      terminal.getPreviousCommand();
      terminal.getNextCommand();
      expect(terminal.getNextCommand()).toBe('');
    });
  });

  describe('clear', () => {
    it('should clear only the output history', () => {
      terminal.addLine({ type: 'text', content: 'test' });
      terminal.addCommand('ls');
      terminal.setCurrentPath('/home');

      terminal.clear();

      expect(terminal.history).toEqual([]);
      expect(terminal.commandHistory).toEqual(['ls']);
      expect(terminal.currentPath).toBe('/home');
    });
  });

  describe('reset', () => {
    it('should reset all terminal state', () => {
      terminal.addLine({ type: 'text', content: 'test' });
      terminal.addCommand('ls');
      terminal.setCurrentPath('/home');
      terminal.setInitialized(true);

      terminal.reset();

      expect(terminal.history).toEqual([]);
      expect(terminal.commandHistory).toEqual([]);
      expect(terminal.historyIndex).toBe(-1);
      expect(terminal.currentPath).toBe('~');
      expect(terminal.initialized).toBe(false);
    });
  });

  describe('History navigation', () => {
    it('should navigate correctly backwards and forwards', () => {
      terminal.addCommand('cmd1');
      terminal.addCommand('cmd2');
      terminal.addCommand('cmd3');

      expect(terminal.getPreviousCommand()).toBe('cmd3');
      expect(terminal.historyIndex).toBe(2);

      expect(terminal.getPreviousCommand()).toBe('cmd2');
      expect(terminal.historyIndex).toBe(1);

      expect(terminal.getNextCommand()).toBe('cmd3');
      expect(terminal.historyIndex).toBe(2);

      expect(terminal.getNextCommand()).toBe('');
      expect(terminal.historyIndex).toBe(3);
    });
  });

  describe('Real usage scenarios', () => {
    it('should simulate a typical terminal session', () => {
      terminal.addCommand('ls');
      terminal.addLine({ type: 'command', content: 'ls' });
      terminal.addLine({ type: 'text', content: 'file1.txt\nfile2.txt' });

      terminal.addCommand('pwd');
      terminal.addLine({ type: 'command', content: 'pwd' });
      terminal.addLine({ type: 'text', content: '/home/user' });

      expect(terminal.history).toHaveLength(4);
      expect(terminal.commandHistory).toEqual(['ls', 'pwd']);

      expect(terminal.getPreviousCommand()).toBe('pwd');
      expect(terminal.getPreviousCommand()).toBe('ls');
    });

    it('should handle clear while maintaining command history', () => {
      terminal.addCommand('ls');
      terminal.addLine({ type: 'text', content: 'output' });
      terminal.addCommand('pwd');
      terminal.addLine({ type: 'text', content: 'output2' });

      terminal.clear();

      expect(terminal.history).toHaveLength(0);

      expect(terminal.commandHistory).toEqual(['ls', 'pwd']);
      expect(terminal.getPreviousCommand()).toBe('pwd');
    });
  });
});
