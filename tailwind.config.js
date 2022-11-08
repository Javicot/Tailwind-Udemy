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
      backgroundImage: {
        "hero-image":
          "url('https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};
