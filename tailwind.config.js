const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '1px',
      mobile: '640px',
      tablet: '768px',
      laptop: '1024px'
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