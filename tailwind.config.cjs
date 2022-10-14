/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      cyan: {
        500: '#b1d8f7',
        300: '#94dffa',
      },
      red: {
        400: '#f87171',
        300: '#fca5a5',
      }


    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}