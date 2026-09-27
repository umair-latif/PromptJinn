import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plain Vite + React, no extra tooling. Keeping this file boring on purpose:
// a hobby project should be easy for anyone to open and understand at a glance.
export default defineConfig({
  plugins: [react()],
});
