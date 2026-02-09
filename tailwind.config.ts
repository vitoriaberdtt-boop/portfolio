import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'purple-dark': '#1a0b2e',
        'purple-medium': '#2d1b4e',
        'purple-accent': '#5c3d7a',
        'turquoise-bright': '#00d9ff',
        'turquoise-medium': '#00b8d4',
        'turquoise-dark': '#542f76',
        'text-light': '#e8f4f8',
        'text-accent': '#b8e6f0',
        'border-glow': '#7b68ee',
      },
    },
  },
  plugins: [daisyui],
} satisfies Config