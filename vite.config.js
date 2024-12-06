// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import path from 'path';


// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// });
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: false }) // Отключить автоматическое открытие отчета
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'], // Вынести библиотеки в отдельный чанк
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Увеличить лимит для предупреждений
  },
});
