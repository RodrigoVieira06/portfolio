/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5C8FA4',
        primaryDark: '#273E47',
        primaryLight: '#8AD4F1',

        secundary: '#0F1020',
        secundaryDark: '#494D9C',
        secundaryLight: '#494D9C',

        bkgPrimary: '#FEFCFD',
        bkgSecundary: '#F5F5F5',
      },
      dark: {
        'bg-dark': '#000505',
        'secundaryDark': '#000505',
        'backgroundDark': '#000505'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

