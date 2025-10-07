import { writable } from "svelte/store";

type Mode = "static" | "terminal";

const isBrowser = typeof window !== "undefined";

const getInitialMode = (): Mode => {
  if (!isBrowser) return "static";

  const stored = localStorage.getItem("mode") as Mode | null;
  return stored || "static";
};

function createModeStore() {
  const { subscribe, set, update } = writable<Mode>(getInitialMode());

  return {
    subscribe,
    set: (value: Mode) => {
      if (isBrowser) {
        localStorage.setItem("mode", value);
      }
      set(value);
    },
    toggle: () => {
      update((current) => {
        const newMode = current === "static" ? "terminal" : "static";
        if (isBrowser) {
          localStorage.setItem("mode", newMode);
        }
        return newMode;
      });
    },
  };
}

export const currentMode = createModeStore();
