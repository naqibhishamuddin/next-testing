import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ["src/__tests__/setup.ts"],
    coverage: {
      provider: "istanbul",
    },
    globals: true,
    environment: "jsdom",
  },
});
