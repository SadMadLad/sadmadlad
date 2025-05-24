import { defineConfig } from "vite";
import path from "node:path";
import svgLoader from "vite-svg-loader";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/sadmadlad",
	plugins: [vue(), svgLoader({ defaultImport: "component" }), ViteYaml()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		port: 5174,
	},
	build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        fallback: 'index.html',
      }
    }
  }
});
