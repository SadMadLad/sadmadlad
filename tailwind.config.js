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
  safelist: [
    'bg-zinc-700',
    'text-pink-500',
    'text-purple-500',
    'text-orange-500',
    'text-sky-500',
    'text-yellow-500',
    'text-green-500',
    'break-words',
    'whitespace-pre-wrap',
    'list-decimal'
  ],
  plugins: [],
}
