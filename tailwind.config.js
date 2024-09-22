/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx}",
    'node_modules/daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}