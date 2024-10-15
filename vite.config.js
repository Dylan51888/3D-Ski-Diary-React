// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/3D-Ski-Diary-React/", // 确保这里与仓库名称一致，注意大小写
  plugins: [react()],
});
