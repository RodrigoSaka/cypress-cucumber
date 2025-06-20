import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  build: {
    outDir: 'dist/public',
    emptyOutDir: false,
  },
  plugins: [
    istanbul({
      include: 'src/*',
      extension: ['.ts'],
      cypress: true,
      requireEnv: false,
    }),
  ],
});
