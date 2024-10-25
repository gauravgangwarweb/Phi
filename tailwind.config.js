/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkMain: "#252529",
        lightNav: "#FFFFFF",
        logoColor: "#843dd1",
        lightPurple: "#7B6FAb",
        lightblue: "#EDF9FF",
        buttonColor: "#1EC8D4",
        dexButton: "#E6E6E6",
        priceAreaBg: "#F7F9FC",
        seaBlueColor: "#1F9CD1"
      }
    },
  },
  plugins: [],
}