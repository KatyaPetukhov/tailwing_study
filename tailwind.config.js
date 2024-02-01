/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  // darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',

      },
      colors: {
        'logo-main': '#9b0404',

      },
      fontFamily: {
        main: ['Montserrat'],

      },
    },
  },
  plugins: [],
}

