export type FileSystemNodeType = "file" | "directory";

export interface FileSystemNode {
  type: FileSystemNodeType;
  component?: string;
  children?: Record<string, FileSystemNode>;
}

export const filesystem: Record<string, FileSystemNode> = {
  "~": {
    type: "directory",
    children: {
      "about.txt": {
        type: "file",
        component: "About",
      },
      "tech-stack": {
        type: "directory",
        children: {
          "list.txt": {
            type: "file",
            component: "TechStack",
          },
        },
      },
      experience: {
        type: "directory",
        children: {
          "work-history.log": {
            type: "file",
            component: "Experience",
          },
        },
      },
      projects: {
        type: "directory",
        children: {
          "all.json": {
            type: "file",
            component: "Projects",
          },
        },
      },
      contact: {
        type: "directory",
        children: {
          "connect.sh": {
            type: "file",
            component: "Contact",
          },
        },
      },
    },
  },
};

export function resolvePath(
  currentPath: string,
  targetPath: string
): string | null {
  if (targetPath.startsWith("~")) {
    return targetPath;
  }

  if (targetPath.startsWith("./")) {
    targetPath = targetPath.substring(2);
  }

  // Si es ".." o "../", subir un nivel
  if (targetPath === ".." || targetPath === "../") {
    if (currentPath === "~") return "~";
    const parts = currentPath.split("/");
    parts.pop();
    return parts.join("/") || "~";
  }

  if (targetPath === "." || targetPath === "") {
    return currentPath;
  }

  // Ruta relativa
  return currentPath === "~"
    ? `~/${targetPath}`
    : `${currentPath}/${targetPath}`;
}

export function getNode(path: string): FileSystemNode | null {
  const parts = path.split("/").filter((p) => p && p !== "~");
  let current: FileSystemNode | undefined = filesystem["~"];

  for (const part of parts) {
    if (!current || current.type !== "directory" || !current.children) {
      return null;
    }
    current = current.children[part];
  }

  return current || null;
}

export function listDirectory(path: string): string[] {
  const node = getNode(path);
  if (!node || node.type !== "directory" || !node.children) {
    return [];
  }
  return Object.keys(node.children);
}
