/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/Rustic Acres Hero.svg')",
      },
      colors: {
        base: "#F7F5F0",
        primaryNeutral: "#2D2D2D",
        primaryAccent: "#B47F52",
        secondaryNeutral: "#9C8B7C",
        highlightAccent: "#C8A26E",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
