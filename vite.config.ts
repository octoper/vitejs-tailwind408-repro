import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Unfonts({
      // Fontsource API
      fontsource: {
        /**
         * Fonts families lists
         */
        families: [
          'Inter Variable', // Require the `@fontsource-variable/inter` package to be installed.
        ],
      },
    })
  ],
})
