import { defineConfig } from "tsup";
import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";
import { nodeModulesPolyfillPlugin } from "esbuild-plugins-node-modules-polyfill";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	format: ["cjs", "esm", "iife"],
	minify: true,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: "es2020",
	tsconfig: "src/tsconfig.json",
	keepNames: true,
	globalName: "PixelPizzaReshape",
	esbuildPlugins: [
		nodeModulesPolyfillPlugin(),
		esbuildPluginVersionInjector()
	],
	treeshake: true,
	bundle: true,
	splitting: false
});
