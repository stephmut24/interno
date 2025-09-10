/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
  container: {
    padding: {
      DEFAULT: '30px',
    },
  },
  extend: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '968px',
      xl: '1280px',
    },
    fontFamily: {
      primary: ['"DM Serif Display"', 'serif'],
      secondary: ['"Jost"', 'sans-serif'],
    },
    backgroundImage: {
      hero: 'url(/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)',
    },
    colors: {
      primary: {
        DEFAULT: '#292f36',
        hover: '#343e4e',
      },
      secondary: '#4d5053',
      accent: {
        DEFAULT: '#cda274',
        secondary: '#f4f0ec',
        hover: '#b88c5d',
      },
    },
  },
},

  plugins: [],
};