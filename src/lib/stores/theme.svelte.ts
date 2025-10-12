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

function createThemeState() {
  let currentTheme = $state<Theme>(getInitialTheme());

  if (isBrowser) {
    setThemeOnDocument(getInitialTheme());

    // Listen to system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const stored = localStorage.getItem("theme");
        if (!stored) {
          const newTheme = e.matches ? "dark" : "light";
          currentTheme = newTheme;
          setThemeOnDocument(newTheme);
        }
      });
  }

  return {
    get current() {
      return currentTheme;
    },
    set: (value: Theme) => {
      currentTheme = value;
      setThemeOnDocument(value);
    },
    toggle: () => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      currentTheme = newTheme;
      setThemeOnDocument(newTheme);
    },
  };
}

export const theme = createThemeState();
