import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        format: 'system',
        entryFileNames: 'index.js',
        dir: 'dist',
      },
    },
  },
  resolve: {
    alias: {
      "@org/login-app": resolve(__dirname, "../login-app/src/main.tsx"),
      "@org/home-app": resolve(__dirname, "../home-app/src/main.tsx"),
      "@org/partners-app": resolve(__dirname, "../partners-app/src/main.ts"),
      "@org/external-app": resolve(__dirname, "../external-companies-app/src/main.tsx")
    },
  },
  server: {
    port: 3000,
  },
});