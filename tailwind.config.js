/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow:
          "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      },
      shadowHover: {
        shadhover: "4px 4px 10px 8px rgba(88,118,197,0.56)",
      },
      screens: {
        sm: { max: "440px" },
        md: { max: "768px" },
        lg: { max: "1100px" },
        xl: { max: "1400px" },
      },
    },
  },
  plugins: [],
};
