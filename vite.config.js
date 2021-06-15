import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [vue(), WindiCSS(), Pages()],
});
