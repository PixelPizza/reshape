import { defineConfig } from "tsup";
import { esbuildPluginVersionInjector } from "esbuild-plugin-version-injector";
import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions";

export default defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	format: ["cjs"],
	minify: true,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: "esnext",
	tsconfig: "src/tsconfig.json",
	keepNames: true,
	esbuildPlugins: [
		esbuildPluginVersionInjector(),
		esbuildPluginFilePathExtensions()
	],
	treeshake: true,
	bundle: true,
	splitting: false
});
