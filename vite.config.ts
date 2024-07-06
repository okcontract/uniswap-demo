import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
	plugins: [topLevelAwait(), react()],
	server: {
		port: 5000,
		fs: {
			allow: [".."],
		},
	},
	preview: {
		port: 5000,
	},
});
