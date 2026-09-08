import type { Config } from 'tailwindcss'

// @ts-ignore
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'terminal': ['"VT323"', 'monospace'],
        'title': ['"Silkscreen"', '"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [daisyui],
} satisfies Config