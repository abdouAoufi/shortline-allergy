
const colors = require("tailwindcss/colors");
module.exports = {

  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        lighter: "#F8FEFF",
        light: "#BCEAED",
        DEFAULT: "#23B1BA",
        dark: "#1C3A27",

      },
      text: {
        light: "#CCCCCC",
        DEFAULT: "#2E2E2E",
        body: "#808080",
        lightest: "#E5E5E5",
      },
      white: "#ffffff",
      black : "#000000",
      secondary: {
        light: "#F4F9F8",
        DEFAULT: "#E2EEEC",
        rich: "#254330",
      },
    },
    fontFamily: {
      sans: ["Inter", "Arial", "sans-serif"],
    },
    extend: {

      screen: {
        xsm: "400px",
        sm: "512px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      minHeight: {
        14: "56px",

        0: "0",

        "1/4": "25%",

        "1/2": "50%",

        "3/4": "75%",

        full: "100%",
      },

      lineHeight: {
        12: "3rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        120: "30rem",
        100: "25rem",
        84: "21rem"
      },
      borderRadius: {
        "4xl": "2rem",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
