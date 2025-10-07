import { writable } from "svelte/store";

type Theme = "light" | "dark";

const isBrowser = typeof window !== "undefined";

const getSystemTheme = (): Theme => {
  if (!isBrowser) return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialTheme = (): Theme => {
  if (!isBrowser) return "dark";

  const stored = localStorage.getItem("theme") as Theme | null;
  return stored || getSystemTheme();
};

const setThemeOnDocument = (newTheme: Theme) => {
  if (!isBrowser) return;

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
};

function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>(getInitialTheme());

  if (isBrowser) {
    setThemeOnDocument(getInitialTheme());
  }

  return {
    subscribe,
    set: (value: Theme) => {
      setThemeOnDocument(value);
      set(value);
    },
    toggle: () => {
      update((current) => {
        const newTheme = current === "light" ? "dark" : "light";
        setThemeOnDocument(newTheme);
        return newTheme;
      });
    },
  };
}

export const theme = createThemeStore();

if (isBrowser) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        const newTheme = e.matches ? "dark" : "light";
        theme.set(newTheme);
      }
    });
}
