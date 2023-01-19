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
      background: {
        'header': "radial-gradient(ellipse at top left, #CBE2FE, transparent), radial-gradient(ellipse at bottom left, #a9c0dc, transparent), radial-gradient(at bottom right, #cbe2fe, transparent), radial-gradient(ellipse at top right, #a9c0dc, transparent)"
      },
      transition: {
        'zoom': "background-size 200ms"
      }
    },
  },
  plugins: [],
}
