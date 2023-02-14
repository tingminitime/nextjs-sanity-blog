/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#8ebfd7',
        emphasize: '#F7AB0A',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
