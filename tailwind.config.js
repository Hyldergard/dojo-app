/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        energy: {
          DEFAULT: '#ff6b35',
          dark: '#e55a2b',
          light: '#ff8c5a',
        },
        power: '#ffcc00',
      },
    },
  },
  plugins: [],
}

