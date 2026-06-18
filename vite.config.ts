import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [react(), tailwindcss(), imagetools()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          blog: path.resolve(__dirname, 'blog/index.html'),
          audyt: path.resolve(__dirname, 'audyt/index.html'),
          privacy: path.resolve(__dirname, 'polityka-prywatnosci/index.html'),
          cookies: path.resolve(__dirname, 'polityka-cookies/index.html'),
          terms: path.resolve(__dirname, 'regulamin/index.html'),
        },
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
