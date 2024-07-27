/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: {
        800: "#17181B",
        750: "#1D1D1D",
        700: "#1F2023",
        600: "#3A3A3A",
        550: "#484C50",
        400: "#676F76",
        150: "#DADADA",
      },
      white: "#FFFFFF",
      "brand-red": "#F05365",
      "brand-yellow": "#FABC2A",
      "brand-green": "#BCF4DE",
      red: "#F05365",
    },
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
