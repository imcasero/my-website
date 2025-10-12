export type OutputType = "command" | "text" | "error" | "success" | "component";

export interface TerminalLine {
  id: string;
  type: OutputType;
  content: string;
  component?: string;
  timestamp: Date;
}

export interface TerminalState {
  readonly history: TerminalLine[];
  readonly commandHistory: string[];
  readonly historyIndex: number;
  readonly currentPath: string;
  readonly initialized: boolean;
  setInitialized: (value: boolean) => void;
  setHistoryIndex: (index: number) => void;
  setCurrentPath: (path: string) => void;
  addLine: (line: Omit<TerminalLine, "id" | "timestamp">) => void;
  addCommand: (command: string) => void;
  getPreviousCommand: () => string | null;
  getNextCommand: () => string | null;
  clear: () => void;
  reset: () => void;
}

function createTerminalState(): TerminalState {
  let history = $state<TerminalLine[]>([]);
  let commandHistory = $state<string[]>([]);
  let historyIndex = $state<number>(-1);
  let currentPath = $state<string>("~");
  let initialized = $state<boolean>(false);

  return {
    get history() {
      return history;
    },
    get commandHistory() {
      return commandHistory;
    },
    get historyIndex() {
      return historyIndex;
    },
    get currentPath() {
      return currentPath;
    },
    get initialized() {
      return initialized;
    },
    setInitialized: (value: boolean) => {
      initialized = value;
    },
    setHistoryIndex: (index: number) => {
      historyIndex = index;
    },
    setCurrentPath: (path: string) => {
      currentPath = path;
    },
    addLine: (line: Omit<TerminalLine, "id" | "timestamp">) => {
      history.push({
        ...line,
        id: crypto.randomUUID(),
        timestamp: new Date(),
      });
    },
    addCommand: (command: string) => {
      if (command.trim()) {
        commandHistory.push(command);
        historyIndex = commandHistory.length;
      }
    },
    getPreviousCommand: (): string | null => {
      if (commandHistory.length === 0) return null;
      if (historyIndex > 0) {
        historyIndex--;
      }
      return commandHistory[historyIndex] || null;
    },
    getNextCommand: (): string | null => {
      if (commandHistory.length === 0) return null;
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        return commandHistory[historyIndex];
      }
      historyIndex = commandHistory.length;
      return "";
    },
    clear: () => {
      history = [];
    },
    reset: () => {
      history = [];
      commandHistory = [];
      historyIndex = -1;
      currentPath = "~";
      initialized = false;
    },
  };
}

export const terminal = createTerminalState();
