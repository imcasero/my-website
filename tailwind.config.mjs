/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#14C5A2",
        background: {
          light: "#FFFFFF",
          dark: "#121212",
        },
        text: {
          light: "#1A202C",
          dark: "#E2E8F0",
        },
        muted: {
          light: "#718096",
          dark: "#A0AEC0",
        },
        accent: {
          light: "#F7FAFC",
          dark: "#2D3748",
        },
        border: {
          light: "#E2E8F0",
          dark: "#4A5568",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
