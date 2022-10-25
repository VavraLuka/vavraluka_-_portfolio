/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      color: {
        "mainColor": "#e5004e",
        "mainColorDarker": "#ad1646"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}