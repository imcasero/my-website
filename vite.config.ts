import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
})
