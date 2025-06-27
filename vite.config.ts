import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      // ✅ Vercel frontend domains
      "frontend-m92fxird6-snehas-projects-9f78f140.vercel.app",
      "frontend-sigma-five-55.vercel.app",

      // ✅ Cloudflare Tunnel domain
      "mba-clinics-millennium-is.trycloudflare.com",

      // ✅ Local development
      "localhost",
      "127.0.0.1"
    ]
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
