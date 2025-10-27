import { describe, it, expect } from 'vitest';
import { resolvePath, getNode, listDirectory, filesystem } from './filesystem';

describe('Filesystem', () => {
  describe('resolvePath', () => {
    it('should return the path when it starts with ~', () => {
      expect(resolvePath('/any/path', '~/projects')).toBe('~/projects');
      expect(resolvePath('~', '~/about.txt')).toBe('~/about.txt');
    });

    it('should resolve relative paths with ./', () => {
      expect(resolvePath('~', './about.txt')).toBe('~/about.txt');
      expect(resolvePath('~/projects', './all.json')).toBe('~/projects/all.json');
    });

    it('should resolve relative paths without prefix', () => {
      expect(resolvePath('~', 'projects')).toBe('~/projects');
      expect(resolvePath('~/projects', 'all.json')).toBe('~/projects/all.json');
    });

    it('should handle .. to go up one level', () => {
      expect(resolvePath('~/projects', '..')).toBe('~');
      expect(resolvePath('~/tech-stack', '../')).toBe('~');
    });

    it('should stay at ~ when using .. from ~', () => {
      expect(resolvePath('~', '..')).toBe('~');
    });

    it('should return the current path with .', () => {
      expect(resolvePath('~/projects', '.')).toBe('~/projects');
      expect(resolvePath('~', '.')).toBe('~');
    });

    it('should return the current path with empty string', () => {
      expect(resolvePath('~/projects', '')).toBe('~/projects');
    });

    it('should handle nested paths correctly', () => {
      expect(resolvePath('~', 'tech-stack')).toBe('~/tech-stack');
      expect(resolvePath('~/tech-stack', 'list.txt')).toBe('~/tech-stack/list.txt');
    });
  });

  describe('getNode', () => {
    it('should return the root node ~', () => {
      const node = getNode('~');
      expect(node).toBeDefined();
      expect(node?.type).toBe('directory');
    });

    it('should return direct files in ~', () => {
      const node = getNode('~/about.txt');
      expect(node).toBeDefined();
      expect(node?.type).toBe('file');
      expect(node?.component).toBe('About');
    });

    it('should return directories', () => {
      const node = getNode('~/projects');
      expect(node).toBeDefined();
      expect(node?.type).toBe('directory');
    });

    it('should return files in subdirectories', () => {
      const node = getNode('~/projects/all.json');
      expect(node).toBeDefined();
      expect(node?.type).toBe('file');
      expect(node?.component).toBe('Projects');
    });

    it('should return null for non-existent paths', () => {
      expect(getNode('~/nonexistent')).toBeNull();
      expect(getNode('~/projects/fake.txt')).toBeNull();
      expect(getNode('~/fake/path/to/file')).toBeNull();
    });

    it('should handle paths with multiple levels', () => {
      const node = getNode('~/tech-stack/list.txt');
      expect(node).toBeDefined();
      expect(node?.type).toBe('file');
      expect(node?.component).toBe('TechStack');
    });

    it('should return null when trying to access a child of a file', () => {
      expect(getNode('~/about.txt/fake')).toBeNull();
    });
  });

  describe('listDirectory', () => {
    it('should list the contents of the root directory', () => {
      const items = listDirectory('~');
      expect(items).toContain('about.txt');
      expect(items).toContain('tech-stack');
      expect(items).toContain('experience');
      expect(items).toContain('projects');
      expect(items).toContain('contact');
    });

    it('should list the contents of subdirectories', () => {
      const items = listDirectory('~/projects');
      expect(items).toEqual(['all.json']);
    });

    it('should list the contents of the tech-stack directory', () => {
      const items = listDirectory('~/tech-stack');
      expect(items).toEqual(['list.txt']);
    });

    it('should return empty array for non-existent paths', () => {
      expect(listDirectory('~/nonexistent')).toEqual([]);
      expect(listDirectory('~/fake/path')).toEqual([]);
    });

    it('should return empty array when trying to list a file', () => {
      expect(listDirectory('~/about.txt')).toEqual([]);
    });

    it('should list all main directories', () => {
      const items = listDirectory('~');
      expect(items.length).toBeGreaterThan(0);
      expect(Array.isArray(items)).toBe(true);
    });
  });

  describe('Filesystem structure', () => {
    it('should have the correct filesystem structure', () => {
      expect(filesystem['~']).toBeDefined();
      expect(filesystem['~'].type).toBe('directory');
      expect(filesystem['~'].children).toBeDefined();
    });

    it('should contain all expected files and directories', () => {
      const root = filesystem['~'];
      expect(root.children).toHaveProperty('about.txt');
      expect(root.children).toHaveProperty('tech-stack');
      expect(root.children).toHaveProperty('experience');
      expect(root.children).toHaveProperty('projects');
      expect(root.children).toHaveProperty('contact');
    });

    it('should have components assigned to files', () => {
      const aboutNode = getNode('~/about.txt');
      expect(aboutNode?.component).toBe('About');

      const projectsNode = getNode('~/projects/all.json');
      expect(projectsNode?.component).toBe('Projects');

      const contactNode = getNode('~/contact/connect.sh');
      expect(contactNode?.component).toBe('Contact');
    });

    it('should have the correct directory hierarchy', () => {
      const workHistory = getNode('~/experience/work-history.log');
      expect(workHistory).toBeDefined();
      expect(workHistory?.component).toBe('Experience');

      const connectScript = getNode('~/contact/connect.sh');
      expect(connectScript).toBeDefined();
      expect(connectScript?.component).toBe('Contact');
    });
  });

  describe('Real usage scenarios', () => {
    it('should simulate typical terminal navigation', () => {
      let items = listDirectory('~');
      expect(items).toContain('projects');

      const projectsPath = resolvePath('~', 'projects');
      expect(projectsPath).toBe('~/projects');

      items = listDirectory('~/projects');
      expect(items).toContain('all.json');

      const file = getNode('~/projects/all.json');
      expect(file?.type).toBe('file');
    });

    it('should handle navigation with ..', () => {
      let currentPath = '~/projects';

      currentPath = resolvePath(currentPath, '..')!;
      expect(currentPath).toBe('~');

      const items = listDirectory(currentPath);
      expect(items).toContain('projects');
    });

    it('should handle paths with ./', () => {
      const path1 = resolvePath('~', './about.txt');
      expect(path1).toBe('~/about.txt');

      const node = getNode(path1!);
      expect(node?.type).toBe('file');
    });
  });
});
