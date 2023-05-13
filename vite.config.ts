import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    "lib": {
      "name":"bodhify-chat-widget",
      "entry": ["src/index.tsx", "lib/bodhify-chat-widget.ts"],
      "formats": ["cjs"],
    }
  },
});
