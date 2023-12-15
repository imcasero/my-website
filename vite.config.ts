import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      // Agrega alias aquí si es necesario
    },
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxFragment: 'React.Fragment',
  },
});
