module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#0CAC90",
        "secondary-green": "#9CFFDA",
        "ternary-green": "#DEF9F3",
        "primary-yellow": "#FFF3D2",
        "secondary-yellow": "#EEB600",
        "primary-red": "#FFE5F0",
        "secondary-red": "#EF2A93",
        "primary-blue": "#E3EFFF",
        "secondary-blue": "#1975D0",
        "primary-gray": "#F7F6F3",
        "secondary-gray": "#A8A8A8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
