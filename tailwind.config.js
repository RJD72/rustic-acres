/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sassy: ["Sassy Frass", "sans-serif"],
      },
      screens: {
        custom: "1100px",
      },
      scale: {
        99: "0.99",
        102: "1.02",
      },
      backgroundImage: {
        hero: "url('./assets/images/hero-bg.svg')",
      },
      colors: {
        base: "#F7F5F0",
        primaryNeutral: "#2D2D2D",
        primaryAccent: "#B47F52",
        secondaryNeutral: "#9C8F7C",
        secondaryAccent: "#4A4A4A",
        highlightAccent: "#C8A26E",
        backgroundColor: "#ECE7DF",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
