const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        black: '#1E1E20',
        blue: '#236BFE',
        white: '#FCFBFE',
        gray: '#717171'
      }
    },
  },
  plugins: [],
}