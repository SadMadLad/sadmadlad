/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["Italiana", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        dark: "#393646",
        darklite: "#4F4557",
        darklitelite: "#6D5D6E",
        lite: "#F4EEE0",
      }
    },
  },
  safelist: ['bg-zinc-700'],
  plugins: [],
}