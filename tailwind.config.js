/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#507255',   
        secondary: '#F2E0BD', 
        primary2: '#F5F0E4',
        secondary2: '#576950',
        accent: '#8F3D3D',
        accent2: '#2A6F6F',
        accent3: '#C77D7D',
      },
      animation: {
        'rotate': 'rotate 1s linear ease-in-out',
        'rotate-opposite': 'rotate-opposite 1s linear ease-in-out',
        'rotate-back': 'rotate-back 0.5s ease-in-out',
        'rotate-back-opposite': 'rotate-back-opposite 0.5s ease-in-out',
      },
      keyframes: {
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        'rotate-opposite': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-45deg)' },
        },  
        'rotate-back': {
          '0%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'rotate-back-opposite': {
          '0%': { transform: 'rotate(-45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}