/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: colors.indigo,
      gray: colors.zinc,
      success: colors.green,
      danger: colors.red
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
