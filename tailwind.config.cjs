/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      colorPrimary: "#27AE60",
      colorPrimary2: "#93D7AF",
      colorSecundary: "#EB5757",
      colorGrey1: "#333333",
      colorGrey2: "#828282",
      colorGrey3: "#E0E0E0",
      colorGrey4: "#F5F5F5",

      white: "#FFFFFF",
    },
    fontFamily: {
      inter: ["Inter", "ui-monospace", "SFMono-Regular"],
      bebas: ["Bebas Neue", "ui-monospace", "SFMono-Regular"],
    },
    fontSize: {
      title1: "2.5rem",
      title2: "1.5rem",
      headline: "0.750rem",
      headline2: "1rem",
      headline3: "0.875rem",
      placeholder: "1rem",
      size: "1.1rem",
    },
    fontWeight: {
      bold: "700",
      semibold: "600",
      medium: "500",
      regular: "400",
    },
    fontHeight: {
      small: "17px",
      medium: "500",
      large: "400",
    },
    extend: {},
  },
  plugins: [],
};
