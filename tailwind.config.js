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
    colors: {
      background : "#181A1D",
      primary: "#EEEEEE",
      secondary: "#C0C0C0",
      transparent: "transparent",

    },
    extend: {},
  },
  plugins: [],
}
