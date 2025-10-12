type Mode = "static" | "terminal";

const isBrowser = typeof window !== "undefined";

const getInitialMode = (): Mode => {
  if (!isBrowser) return "static";

  const stored = localStorage.getItem("mode") as Mode | null;
  return stored || "static";
};

function createModeState() {
  let currentMode = $state<Mode>(getInitialMode());

  return {
    get current() {
      return currentMode;
    },
    set: (value: Mode) => {
      currentMode = value;
      if (isBrowser) {
        localStorage.setItem("mode", value);
      }
    },
    toggle: () => {
      const newMode = currentMode === "static" ? "terminal" : "static";
      currentMode = newMode;
      if (isBrowser) {
        localStorage.setItem("mode", newMode);
      }
    },
  };
}

export const currentMode = createModeState();
