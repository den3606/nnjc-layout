import { resolve } from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  base: './',
  plugins: [splitVendorChunkPlugin()],
  build: {
    target: 'esnext',
    outDir: '../../dashboard',
    emptyOutDir : true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: {
        playerSelect: resolve(__dirname, 'playerSelect.html'),
        score: resolve(__dirname, 'score.html'),
        schedule: resolve(__dirname, 'schedule.html')
      }
    }
  },
});
