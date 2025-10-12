import { terminal } from "$lib/stores/terminal.svelte";
import { currentMode } from "$lib/stores/mode.svelte";
import { getNode, listDirectory, resolvePath } from "./filesystem";
import type { OutputType } from "$lib/stores/terminal.svelte";

export interface CommandResult {
  type: OutputType;
  content: string;
  component?: string;
}

export interface Command {
  name: string;
  description: string;
  usage?: string;
  execute: (args: string[]) => CommandResult;
}

const commands: Record<string, Command> = {
  help: {
    name: "help",
    description: "Show available commands",
    usage: "help [command]",
    execute: (args) => {
      if (args.length > 0) {
        const cmd = commands[args[0]];
        if (cmd) {
          return {
            type: "text",
            content: `${cmd.name} - ${cmd.description}\nUsage: ${
              cmd.usage || cmd.name
            }`,
          };
        }
        return {
          type: "error",
          content: `No help available for: ${args[0]}`,
        };
      }

      const helpText = Object.values(commands)
        .map((cmd) => `  ${cmd.name.padEnd(12)} - ${cmd.description}`)
        .join("\n");

      return {
        type: "text",
        content: `Available commands:\n\n${helpText}\n\nType 'help <command>' for more info.\n\nTips:\n  cat <file>           - View text files (cat about.txt or cat ./about.txt)\n  cd <path>            - Change directory (cd projects or cd ./projects)\n  sh <script.sh>       - Execute shell scripts (sh connect.sh)\n  ./<script.sh>        - Execute shell scripts (./connect.sh)\n  ./                   - Refers to current directory`,
      };
    },
  },

  "?": {
    name: "?",
    description: "Alias for help",
    execute: (args) => commands.help.execute(args),
  },

  ls: {
    name: "ls",
    description: "List directory contents",
    usage: "ls [path]",
    execute: (args) => {
      const targetPath = args[0] || terminal.currentPath;
      const resolvedPath = resolvePath(terminal.currentPath, targetPath);

      if (!resolvedPath) {
        return {
          type: "error",
          content: `ls: cannot access '${targetPath}': No such file or directory`,
        };
      }

      const node = getNode(resolvedPath);
      if (!node) {
        return {
          type: "error",
          content: `ls: cannot access '${targetPath}': No such file or directory`,
        };
      }

      if (node.type === "file") {
        return {
          type: "text",
          content: targetPath,
        };
      }

      const items = listDirectory(resolvedPath);
      if (items.length === 0) {
        return {
          type: "text",
          content: "",
        };
      }

      const formatted = items
        .map((item) => {
          const itemPath =
            resolvedPath === "~" ? `~/${item}` : `${resolvedPath}/${item}`;
          const itemNode = getNode(itemPath);
          const prefix =
            itemNode?.type === "directory" ? "drwxr-xr-x" : "-rw-r--r--";
          return `${prefix}  ${item}${
            itemNode?.type === "directory" ? "/" : ""
          }`;
        })
        .join("\n");

      return {
        type: "text",
        content: formatted,
      };
    },
  },

  cd: {
    name: "cd",
    description: "Change directory",
    usage: "cd <path> | cd .. (go up)",
    execute: (args) => {
      if (args.length === 0) {
        terminal.setCurrentPath("~");
        return {
          type: "text",
          content: "",
        };
      }

      const targetPath = args[0];
      const resolvedPath = resolvePath(terminal.currentPath, targetPath);

      if (!resolvedPath) {
        return {
          type: "error",
          content: `cd: ${targetPath}: No such file or directory`,
        };
      }

      const node = getNode(resolvedPath);
      if (!node) {
        return {
          type: "error",
          content: `cd: ${targetPath}: No such file or directory`,
        };
      }

      if (node.type !== "directory") {
        return {
          type: "error",
          content: `cd: ${targetPath}: Not a directory`,
        };
      }

      terminal.setCurrentPath(resolvedPath);
      return {
        type: "text",
        content: "",
      };
    },
  },

  pwd: {
    name: "pwd",
    description: "Print working directory",
    execute: () => {
      return {
        type: "text",
        content: terminal.currentPath,
      };
    },
  },

  cat: {
    name: "cat",
    description: "Display file contents",
    usage: "cat <file>",
    execute: (args) => {
      if (args.length === 0) {
        return {
          type: "error",
          content: "cat: missing file operand",
        };
      }

      const targetPath = args[0];
      const resolvedPath = resolvePath(terminal.currentPath, targetPath);

      if (!resolvedPath) {
        return {
          type: "error",
          content: `cat: ${targetPath}: No such file or directory`,
        };
      }

      const node = getNode(resolvedPath);
      if (!node) {
        return {
          type: "error",
          content: `cat: ${targetPath}: No such file or directory`,
        };
      }

      if (node.type === "directory") {
        return {
          type: "error",
          content: `cat: ${targetPath}: Is a directory`,
        };
      }

      // No ejecutar archivos .sh con cat
      if (targetPath.endsWith(".sh")) {
        return {
          type: "error",
          content: `cat: ${targetPath}: Use './${targetPath}' or 'sh ${targetPath}' to execute shell scripts`,
        };
      }

      if (node.component) {
        return {
          type: "component",
          content: "",
          component: node.component,
        };
      }

      return {
        type: "text",
        content: "File is empty",
      };
    },
  },

  sh: {
    name: "sh",
    description: "Execute shell script",
    usage: "sh <script.sh> or ./<script.sh>",
    execute: (args) => {
      if (args.length === 0) {
        return {
          type: "error",
          content: "sh: missing script operand",
        };
      }

      let targetPath = args[0];

      // Remover ./ si está al inicio
      if (targetPath.startsWith("./")) {
        targetPath = targetPath.substring(2);
      }

      const resolvedPath = resolvePath(terminal.currentPath, targetPath);

      if (!resolvedPath) {
        return {
          type: "error",
          content: `sh: ${targetPath}: No such file or directory`,
        };
      }

      const node = getNode(resolvedPath);
      if (!node) {
        return {
          type: "error",
          content: `sh: ${targetPath}: No such file or directory`,
        };
      }

      if (node.type === "directory") {
        return {
          type: "error",
          content: `sh: ${targetPath}: Is a directory`,
        };
      }

      if (!targetPath.endsWith(".sh")) {
        return {
          type: "error",
          content: `sh: ${targetPath}: Not a shell script`,
        };
      }

      if (node.component) {
        return {
          type: "component",
          content: "",
          component: node.component,
        };
      }

      return {
        type: "text",
        content: "Script executed successfully",
      };
    },
  },

  clear: {
    name: "clear",
    description: "Clear terminal screen",
    execute: () => {
      terminal.clear();
      return {
        type: "success",
        content: "",
      };
    },
  },

  whoami: {
    name: "whoami",
    description: "Display current user info",
    execute: () => {
      return {
        type: "text",
        content: "imcasero@dev ~ Software Developer",
      };
    },
  },

  history: {
    name: "history",
    description: "Show command history",
    execute: () => {
      const hist = terminal.commandHistory
        .map((cmd, i) => `  ${(i + 1).toString().padStart(3)}  ${cmd}`)
        .join("\n");

      return {
        type: "text",
        content: hist || "No history available",
      };
    },
  },

  banner: {
    name: "banner",
    description: "Display welcome banner",
    execute: () => {
      const banner = `
╔══════════════════════════════════════════╗
║                                          ║
║        Welcome to imcasero.dev           ║
║                                          ║
║      Software Developer Portfolio        ║
║                                          ║
╚══════════════════════════════════════════╝

Type 'help' or '?' to see available commands
      `;
      return {
        type: "text",
        content: banner,
      };
    },
  },
};

export function executeCommand(input: string): CommandResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      type: "text",
      content: "",
    };
  }

  if (trimmed.startsWith("./") && trimmed.endsWith(".sh")) {
    return commands.sh.execute([trimmed]);
  }

  const [cmdName, ...args] = trimmed.split(/\s+/);
  const command = commands[cmdName];

  if (!command) {
    return {
      type: "error",
      content: `bash: ${cmdName}: command not found`,
    };
  }

  return command.execute(args);
}
