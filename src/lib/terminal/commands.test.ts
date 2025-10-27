import { describe, it, expect, beforeEach, vi } from 'vitest';
import { executeCommand } from './commands';
import { terminal } from '$lib/stores/terminal.svelte';

vi.mock('./filesystem', async () => {
  const actual = await vi.importActual('./filesystem');
  return actual;
});

describe('Commands', () => {
  beforeEach(() => {
    terminal.reset();
  });

  describe('help command', () => {
    it('should show the list of available commands', () => {
      const result = executeCommand('help');
      expect(result.type).toBe('text');
      expect(result.content).toContain('Available commands');
      expect(result.content).toContain('help');
      expect(result.content).toContain('ls');
      expect(result.content).toContain('cd');
      expect(result.content).toContain('cat');
    });

    it('should show specific help for a command', () => {
      const result = executeCommand('help ls');
      expect(result.type).toBe('text');
      expect(result.content).toContain('ls');
      expect(result.content).toContain('List directory contents');
    });

    it('should show error for non-existent commands', () => {
      const result = executeCommand('help nonexistent');
      expect(result.type).toBe('error');
      expect(result.content).toContain('No help available');
    });
  });

  describe('? command (help alias)', () => {
    it('should work as an alias for help', () => {
      const result = executeCommand('?');
      expect(result.type).toBe('text');
      expect(result.content).toContain('Available commands');
    });
  });

  describe('ls command', () => {
    it('should list contents of the current directory (~)', () => {
      const result = executeCommand('ls');
      expect(result.type).toBe('text');
      expect(result.content).toContain('about.txt');
      expect(result.content).toContain('projects/');
    });

    it('should list contents of a specific directory', () => {
      const result = executeCommand('ls projects');
      expect(result.type).toBe('text');
      expect(result.content).toContain('all.json');
    });

    it('should show error for non-existent directories', () => {
      const result = executeCommand('ls nonexistent');
      expect(result.type).toBe('error');
      expect(result.content).toContain('No such file or directory');
    });

    it('should show the file name if a file is passed', () => {
      const result = executeCommand('ls about.txt');
      expect(result.type).toBe('text');
      expect(result.content).toBe('about.txt');
    });

    it('should show permissions in Unix format', () => {
      const result = executeCommand('ls');
      expect(result.content).toMatch(/drwxr-xr-x|rw-r--r--/);
    });
  });

  describe('cd command', () => {
    it('should change to home directory without arguments', () => {
      terminal.setCurrentPath('~/projects');
      const result = executeCommand('cd');
      expect(result.type).toBe('text');
      expect(terminal.currentPath).toBe('~');
    });

    it('should change to a specific directory', () => {
      const result = executeCommand('cd projects');
      expect(result.type).toBe('text');
      expect(terminal.currentPath).toBe('~/projects');
    });

    it('should support relative paths with ./', () => {
      const result = executeCommand('cd ./projects');
      expect(result.type).toBe('text');
      expect(terminal.currentPath).toBe('~/projects');
    });

    it('should go up one level with ..', () => {
      terminal.setCurrentPath('~/projects');
      const result = executeCommand('cd ..');
      expect(result.type).toBe('text');
      expect(terminal.currentPath).toBe('~');
    });

    it('should show error for non-existent directories', () => {
      const result = executeCommand('cd nonexistent');
      expect(result.type).toBe('error');
      expect(result.content).toContain('No such file or directory');
    });

    it('should show error when trying to cd to a file', () => {
      const result = executeCommand('cd about.txt');
      expect(result.type).toBe('error');
      expect(result.content).toContain('Not a directory');
    });
  });

  describe('pwd command', () => {
    it('should show the current directory', () => {
      const result = executeCommand('pwd');
      expect(result.type).toBe('text');
      expect(result.content).toBe('~');
    });

    it('should show the current directory after cd', () => {
      executeCommand('cd projects');
      const result = executeCommand('pwd');
      expect(result.content).toBe('~/projects');
    });
  });

  describe('cat command', () => {
    it('should show error without arguments', () => {
      const result = executeCommand('cat');
      expect(result.type).toBe('error');
      expect(result.content).toContain('missing file operand');
    });

    it('should return component for files with assigned component', () => {
      const result = executeCommand('cat about.txt');
      expect(result.type).toBe('component');
      expect(result.component).toBe('About');
    });

    it('should show error for non-existent files', () => {
      const result = executeCommand('cat nonexistent.txt');
      expect(result.type).toBe('error');
      expect(result.content).toContain('No such file or directory');
    });

    it('should show error when trying to cat a directory', () => {
      const result = executeCommand('cat projects');
      expect(result.type).toBe('error');
      expect(result.content).toContain('Is a directory');
    });

    it('should reject .sh files and suggest using sh', () => {
      const result = executeCommand('cat contact/connect.sh');
      expect(result.type).toBe('error');
      expect(result.content).toContain('Use');
      expect(result.content).toContain('sh');
    });

    it('should support relative paths', () => {
      const result = executeCommand('cat ./about.txt');
      expect(result.type).toBe('component');
    });
  });

  describe('sh command', () => {
    it('should show error without arguments', () => {
      const result = executeCommand('sh');
      expect(result.type).toBe('error');
      expect(result.content).toContain('missing script operand');
    });

    it('should execute .sh scripts', () => {
      const result = executeCommand('sh contact/connect.sh');
      expect(result.type).toBe('component');
      expect(result.component).toBe('Contact');
    });

    it('should support ./ at the beginning', () => {
      terminal.setCurrentPath('~/contact');
      const result = executeCommand('sh ./connect.sh');
      expect(result.type).toBe('component');
    });

    it('should show error for non-existent scripts', () => {
      const result = executeCommand('sh nonexistent.sh');
      expect(result.type).toBe('error');
      expect(result.content).toContain('No such file or directory');
    });

    it('should show error for files that are not .sh', () => {
      const result = executeCommand('sh about.txt');
      expect(result.type).toBe('error');
      expect(result.content).toContain('Not a shell script');
    });

    it('should show error when trying to execute a directory', () => {
      const result = executeCommand('sh projects');
      expect(result.type).toBe('error');
      expect(result.content).toContain('Is a directory');
    });
  });

  describe('./ shortcut for scripts', () => {
    it('should execute scripts with ./<script.sh>', () => {
      terminal.setCurrentPath('~/contact');
      const result = executeCommand('./connect.sh');
      expect(result.type).toBe('component');
      expect(result.component).toBe('Contact');
    });

    it('should work from any directory with full path', () => {
      const result = executeCommand('./contact/connect.sh');
      expect(result.type).toBe('component');
    });
  });

  describe('clear command', () => {
    it('should clear the terminal history', () => {
      terminal.addLine({ type: 'text', content: 'test' });
      expect(terminal.history.length).toBeGreaterThan(0);

      const result = executeCommand('clear');
      expect(result.type).toBe('success');
      expect(terminal.history).toHaveLength(0);
    });
  });

  describe('whoami command', () => {
    it('should show user information', () => {
      const result = executeCommand('whoami');
      expect(result.type).toBe('text');
      expect(result.content).toContain('imcasero');
      expect(result.content).toContain('Software Developer');
    });
  });

  describe('history command', () => {
    it('should show message when there is no history', () => {
      const result = executeCommand('history');
      expect(result.type).toBe('text');
      expect(result.content).toBe('No history available');
    });

    it('should show the command history', () => {
      terminal.addCommand('ls');
      terminal.addCommand('pwd');
      terminal.addCommand('cd projects');

      const result = executeCommand('history');
      expect(result.type).toBe('text');
      expect(result.content).toContain('1');
      expect(result.content).toContain('ls');
      expect(result.content).toContain('2');
      expect(result.content).toContain('pwd');
      expect(result.content).toContain('3');
      expect(result.content).toContain('cd projects');
    });
  });

  describe('banner command', () => {
    it('should show the welcome banner', () => {
      const result = executeCommand('banner');
      expect(result.type).toBe('text');
      expect(result.content).toContain('Welcome');
      expect(result.content).toContain('imcasero.dev');
    });
  });

  describe('executeCommand', () => {
    it('should return empty content for empty input', () => {
      const result = executeCommand('');
      expect(result.type).toBe('text');
      expect(result.content).toBe('');
    });

    it('should return empty content for input with only spaces', () => {
      const result = executeCommand('   ');
      expect(result.type).toBe('text');
      expect(result.content).toBe('');
    });

    it('should show error for non-existent commands', () => {
      const result = executeCommand('fakecmd');
      expect(result.type).toBe('error');
      expect(result.content).toContain('command not found');
      expect(result.content).toContain('fakecmd');
    });

    it('should parse commands with arguments correctly', () => {
      const result = executeCommand('help ls');
      expect(result.type).toBe('text');
      expect(result.content).toContain('ls');
    });

    it('should handle multiple spaces between arguments', () => {
      const result = executeCommand('help    ls');
      expect(result.type).toBe('text');
    });

    it('should trim spaces at the beginning and end', () => {
      const result = executeCommand('  help  ');
      expect(result.type).toBe('text');
      expect(result.content).toContain('Available commands');
    });
  });

  describe('Integration: Typical user flow', () => {
    it('should simulate a complete user session', () => {
      let result = executeCommand('help');
      expect(result.type).toBe('text');

      result = executeCommand('pwd');
      expect(result.content).toBe('~');

      result = executeCommand('ls');
      expect(result.content).toContain('projects');

      result = executeCommand('cd projects');
      expect(terminal.currentPath).toBe('~/projects');

      result = executeCommand('ls');
      expect(result.content).toContain('all.json');

      result = executeCommand('cat all.json');
      expect(result.type).toBe('component');

      result = executeCommand('cd ..');
      expect(terminal.currentPath).toBe('~');

      terminal.addCommand('ls');
      terminal.addCommand('cd projects');
      result = executeCommand('history');
      expect(result.content).toContain('ls');
    });

    it('should handle common user errors', () => {
      let result = executeCommand('lss');
      expect(result.type).toBe('error');

      result = executeCommand('cat fake.txt');
      expect(result.type).toBe('error');

      result = executeCommand('cd about.txt');
      expect(result.type).toBe('error');

      result = executeCommand('cat projects');
      expect(result.type).toBe('error');
    });
  });
});
