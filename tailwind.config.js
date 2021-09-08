const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgcolor: "#E0DFE2",
        cardcolor: "#F0F0F0",
        hovercolor: "#227381",
        textcolor: "#111",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
      backgroundImage: (theme) => ({
        img: "url('data/photo_2020-10-03_15-03-40.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
