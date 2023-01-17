/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cm-3d-card': "url('assets/cm-3d-card.png')"
      }
    },
  },
  plugins: [],
}
