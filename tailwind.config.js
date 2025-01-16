/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lila: {
          light: '#EDE4F8',
          DEFAULT: '#B497BD',
          dark: '#7A4C7C',
        },
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#C9C6CE',
        },
      },
      fontFamily: {
        parisienne: ['Parisienne', 'serif'],
        rosario: ['Rosario', 'serif'],
      },
    },
  },
  plugins: [],
}