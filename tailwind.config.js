/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#272727",
      subtitel: "#C5C5C5",
      titel: "#FFFFFF",
      text: "#CCCCCC",
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
