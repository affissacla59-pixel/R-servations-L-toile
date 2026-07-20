import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Add this import

// https://vite.dev/config/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f1c40f',
          DEFAULT: '#dfb15b',
          dark: '#cf9f4b',
        },
        dark: {
          light: '#1a1a1a',
          DEFAULT: '#121212',
          deep: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}
