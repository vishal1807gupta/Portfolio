/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'heading': ['Great Vibes', 'cursive'],
        'subheading': ['Grape Nuts', 'cursive'],
      },
    },
  },
  plugins: [],
}
