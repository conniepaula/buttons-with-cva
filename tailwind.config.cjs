/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
    },
    gridTemplateRows: {
      7: "repeat(7, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      13: "repeat(13, minmax(0, 1fr))",
    },
  },
  plugins: [],
};
