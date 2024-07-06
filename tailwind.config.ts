/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";

export default {
	content: [
		"./src/*.{html,js,tsx}",
		"./node_modules/@okcontract/sdk-react/dist/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			zIndex: {
				100: "100",
			},
		},
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: ["light", "night"],
		darkTheme: "night",
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		themeRoot: ":root",
	},
};
