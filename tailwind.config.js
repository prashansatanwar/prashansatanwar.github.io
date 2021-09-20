const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgcolor: "#D3CEDF",
        cardcolor: "#F0F0F0",
        hovercolor: "#227381",
        textcolor: "#111",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
      backgroundImage: (theme) => ({
        img: "url('./data/photo1.jpg')",
      }),
      height: {
        "90p": "90%",
        "95p": "95%",
      },
      width: {
        "90p": "90%",
        "95p": "95%",
      },
      minHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
    screens: {
      xsm: "320px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
