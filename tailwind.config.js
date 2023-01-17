/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cm-3d-card': "url('assets/cm-3d-card.png')"
      },
      backgroundSize: {
        'unzoom': "100%",
        'zoom': "110%"
      },
      transition: {
        'zoom': "background-size 200ms"
      }
    },
  },
  plugins: [],
}
