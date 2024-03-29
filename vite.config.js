import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: 'hui',
      entry: resolve(__dirname, 'packages/utils/index.js')
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages')
    }
  }
});
