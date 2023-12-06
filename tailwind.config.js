/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#272727",
      subtitle: "#C5C5C5",
      title: "#FFFFFF",
      text: "#CCCCCC",
      link: "#B4B4B4",
    },
    fontFamily: {
      sans: ["Inter"],
    },
  },
  plugins: [],
};
