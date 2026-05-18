import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Isso ignora erros de typescript durante o build
    sourcemap: false,
  },
});
