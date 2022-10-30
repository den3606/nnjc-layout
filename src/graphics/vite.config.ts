import { resolve } from 'path';
import { defineConfig } from 'vite';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

export default defineConfig({
  base: './',
  plugins: [crossOriginIsolation()],
  build: {
    outDir: '../../graphics',
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        battle: resolve(__dirname, 'views/battle.html'),
        waiting: resolve(__dirname, 'views/waiting.html')
      }
    }
  },
});
