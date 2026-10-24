import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works from any path. Routing is hash-based.
export default defineConfig({
  base: './',
  plugins: [react()],
});
