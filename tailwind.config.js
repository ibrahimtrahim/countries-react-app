/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'},
      }
    },
  },
  plugins: [],
}


