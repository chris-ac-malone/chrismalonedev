/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundSize: {
        'unzoom': "100%",
        'zoom': "110%"
      },
      backgroundImage: {
        'header': "radial-gradient(ellipse at top left, #CBE2FE, transparent), radial-gradient(ellipse at bottom left, #a9c0dc, transparent), radial-gradient(at bottom right, #cbe2fe, transparent), radial-gradient(ellipse at top right, #a9c0dc, transparent)"
      },
      transition: {
        'zoom': "background-size 200ms"
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideIn: {
          '0%': { marginTop: 50, opacity: 0 },
          '15%': { marginTop: 50, opacity: 0 },
          '100%': { marginTop: 0, opacity: 1 }
        }
      },
      animation: {
        fadein: 'fadein 2s ease-in',
        slideIn: 'slideIn 2s ease',
      }
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
}
