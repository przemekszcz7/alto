import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import webfontDownload from 'vite-plugin-webfont-dl';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
      imagetools(),
      // injectAsStyleTag: false → fonty trafiają do CSS jako @font-face,
      // co pozwala Vite na wstrzyknięcie <link rel="preload"> w <head>
      // zamiast blokującego <style> odkrywanego dopiero po parsowaniu CSS
      webfontDownload([], {
        injectAsStyleTag: false,
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Generuj <link rel="modulepreload"> dla każdego chunka automatycznie
      modulePreload: { polyfill: true },
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
            if (!id.includes('node_modules')) return;

            if (id.includes('motion')) return 'chunk-motion';
            if (id.includes('@google/genai')) return 'chunk-genai';
            if (id.includes('lucide-react')) return 'chunk-lucide';

            // react-dom i react razem – zawsze potrzebne, niech idą jako jeden chunk
            if (
              id.includes('react-dom') ||
              id.includes('/react/') ||
              id.includes('scheduler')
            )
              return 'chunk-react';

            return 'chunk-vendor';
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});