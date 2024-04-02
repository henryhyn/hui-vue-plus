import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      name: 'hui',
      entry: resolve(__dirname, 'packages/index.js')
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        globals: {
          vue: 'Vue',
          '@vueuse/core': 'Core'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages')
    }
  }
});
