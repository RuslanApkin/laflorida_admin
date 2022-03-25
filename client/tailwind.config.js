const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      accent: "#49ae49",
      neutral: "#f8f8f8",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      pink: colors.pink,
      yellow: colors.yellow,
      red: colors.red,
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
