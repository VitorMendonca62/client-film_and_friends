/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      colors: {
        lightBlack: '#333333',
        black: '#111111',
        darkGreen: '#25A96C',
        white: '#ffffff',
        fonts: '#AAAAAA',
        red: '#FF0000',
      },
      backgroundImage: {
        main: "url('/src/assets/imgs/backgroundMain.png')",
      },
      keyframes: {
        visible: {
          '0%': { opacity: '0.35' },

          '100%': { opacity: '1' },
        },
        showModal: {
          '0%': { transform: 'scale(0.5,0.5)' , opacity: "0.5" },

          '100%': { transform: 'scale(1,1)', opacity: "1" },
        },
        enableMenu: {
          '0%': { height: '0' },
          '50%': { height: '50%' },
          '75%': { height: '100%' },
          '100%': { height: '150%' },
        },
      },
      animation: {
        visible: 'visible 1.5s linear',
        showModal: 'showModal 0.25s linear',
        enableMenu: 'enableMenu 0.25s linear',
      },
    },
  },
  plugins: [],
};
