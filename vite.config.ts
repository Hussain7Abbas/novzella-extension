import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import webExtension from 'vite-plugin-web-extension';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webExtension({
      watchFilePaths: [path.resolve(__dirname, 'src/popup.tsx')],
      disableAutoLaunch: true,
    }),
  ],
});
