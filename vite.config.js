import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plain Vite + React, no extra tooling. Keeping this file boring on purpose:
// a hobby project should be easy for anyone to open and understand at a glance.
//
// base: './' makes the built index.html reference its JS/CSS with relative
// paths ("./assets/...") instead of absolute ones ("/assets/..."). Without
// this, the build only works when served from a domain's root — it breaks
// anywhere the page lives under a sub-path (a project preview link, GitHub
// Pages under a repo name, etc.), which is exactly where a hobby project
// tends to get previewed before it has its own domain wired up.
export default defineConfig({
  plugins: [react()],
  base: './',
});
