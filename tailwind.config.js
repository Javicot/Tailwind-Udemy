/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blanco: "#ffffff",
        oscuro: "#212121",
        primario: "#ffc107",
        secundario: "#0097a7",
        gris: "#757575",
      },
      screens: {
        movil: "440px",
        noxl: { max: "439px" },
      },
    },
  },
  plugins: [],
};
