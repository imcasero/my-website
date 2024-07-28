/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0fdf9",
          100: "#ccfbeb",
          200: "#99f7dc",
          300: "#5debc9",
          400: "#2cd5b1",
          500: "#14c5a2",
          600: "#0c957d",
          700: "#0e7766",
          800: "#105f52",
          900: "#134e45",
          950: "#042f2a",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      width: {
        main: "48rem",
      },
    },
  },
  plugins: [],
};
