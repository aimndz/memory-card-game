/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customMain: "#BFDE42",
      },
      colors: {
        customMain: "#BFDE42",
        customMainLight: "#FFF500",
        customMain2: "#193840",
      },
      dropShadow: {
        customShadow: "0px 7px 8px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        home: ["Rick and Morty", "sans-serif"],
        button: ["Joystix", "sans-serif"],
      },
    },
  },
  plugins: [],
};
