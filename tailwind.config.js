/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': { 'raw': '(max-width: 638px)' },
      },
      width: {
        'carouselCover': '900px',
        'layoutWidth': '98%',
        'sideBarCardWidth': '200px',
        'adCardContentWidth': '245px',
        'countryInfoWidth': '1100px',

      },
      height: {
        'headerHeight': '440px',
        'carouselHeight': '420px',
        'headerBackgroundHeight': '500px',
        'sideBarCardHeight': '300px',
        'adCardContentHeight': '280px',
        'countryInfoHeight': '680px',

      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
    fontSize: {
      title: ['60px', '60px'],
      subtitle: ['23px', '35px'],
      xsm: ['12px', '18px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xxl: ['32px', '40px'],
    }
  },
  variants: {
    scrollbar: ['dark', 'rounded'],
    extedn: [],
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}