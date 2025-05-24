/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		colors: {
			primary: colors.indigo,
			secondary: colors.lime,
			tertiary: colors.pink,
			...colors,
		},
		extend: {
			fontFamily: {
				sans: ["Geist", ...defaultTheme.fontFamily.sans],
				mono: ["GeistMono", ...defaultTheme.fontFamily.sans],
			},
			typography: {
				css: {
					marginTop: "1rem",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/container-queries"),
		require("@tailwindcss/typography"),
	],
};
