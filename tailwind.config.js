/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#942F70',
        secondary: '#E4DF00',
      },
      height: {
        nav: '4rem',
        content: 'calc(100vh - 4rem)',
      },
      margin: {
        nav: '4rem 0 0 0',
      },
      backgroundImage: {
        page: 'linear-gradient(138.11deg, #FEF452 0%, #942F70 121.92%);',
      },
    },
  },
  plugins: [require('daisyui'), require('prettier-plugin-tailwindcss')],
};
