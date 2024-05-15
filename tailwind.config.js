/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        "lightBlack": '#333333',
        "black": '#111111', 
        "darkGreen": "#25A96C",
        "white": "#ffffff",
        "fonts": "#AAAAAA"
      },
      backgroundImage: {
        "main": "url('/src/assets/imgs/backgroundMain.png')"
      }
    },
  },
  plugins: [],
}