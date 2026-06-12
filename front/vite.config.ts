import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import viteReact from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import remarkFrontmatter from "remark-frontmatter";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    viteReact(),
    mdx({
      remarkPlugins: [remarkFrontmatter],
    }),
    devtools(),
    tailwindcss(),
  ],
});
