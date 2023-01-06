import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  const rootPath = resolve(process.cwd());
  const srcPath = `${rootPath}/src`;

  return {
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath,
      },
    },
    plugins: [vue()], // to process SFC
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.js"),
        name: "VueInlineCalendar",
      },
      rollupOptions: {
        // external modules won't be bundled into your library
        external: ["vue"], // not every external has a global
        output: {
          // disable warning on src/index.ts using both default and named export
          exports: "named",
          // Provide global variables to use in the UMD build
          // for externalized deps (not useful if 'umd' is not in lib.formats)
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  };
});
