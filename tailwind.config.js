/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    ]
},
  theme: {
    extend: {
      colors: {
        background : "#181A1D",
        "dark-background": "#131517",
        primary: "#EEEEEE",
        secondary: "#C0C0C0",
        "light-background": "#393E46",
        transparent: "transparent",
      },
      backgroundImage: {
      },
      backgroundPosition: {
        'left-top' : "fixed top-0 left-0" 
      }
    },
  },
  plugins: [],
}
