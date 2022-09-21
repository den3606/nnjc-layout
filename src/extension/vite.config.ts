import { resolve } from 'path';
import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  base: './',
  build: {
    outDir: '../../extension',
    assetsDir: './',
    emptyOutDir : true,
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.ts')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunk-[name].js',
        format: 'cjs'
      },
      plugins: [commonjs()]
    }
  },
});
