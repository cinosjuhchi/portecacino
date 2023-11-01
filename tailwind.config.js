/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#D0BFFF',
        second: '#F4CE14',
        third: '#BEADFA',
        dark: '#0f172a', 
        custsalt: '#64748b'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
};
