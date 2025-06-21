import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MohsensamiModal",
      fileName: (format) => `modal.${format}.js`,
    },
    cssCodeSplit: false, // Inlines all CSS
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        inlineDynamicImports: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
