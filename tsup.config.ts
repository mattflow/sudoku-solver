import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  minify: true,
  dts: true,
  sourcemap: true,
  clean: true,
});
