import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // IMPORTANT: Replace 'your-repo-name' with your actual GitHub repo name
  base: '/port/',

  plugins: [
    tailwindcss(),
  ],

  build: {
    chunkSizeWarningLimit: 1000, // optional: silences 500kB warning

    rollupOptions: {
      output: {
        // Safe and controlled code splitting
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three';
            if (id.includes('@react-three')) return 'r3f';         // fiber, drei, postprocessing
            if (id.includes('react')) return 'react';              // keep react/react-dom together
            return 'vendor';                                       // other dependencies
          }
        },
      },
    },
  },
});
