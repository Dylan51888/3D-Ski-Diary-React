// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/3D-Ski-Diary-React/", // 注意大小写
  plugins: [react()],
});
