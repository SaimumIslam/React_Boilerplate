const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      primary: "#0872ac",
      secondary: "#00acaf",
      orange: "#f29000",
      orangeDark: "#e74d1a",
      background: "#f5f6f8",
      navbar: "#fff",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
