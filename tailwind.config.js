/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        mineShaft: 'hsl(0, 0%, 20%)',
        aquamarineBlue: 'hsl(176, 68%, 64%)',
        athensGray: 'hsl(210, 20%, 98%)',
        athensGray2: 'hsl(220, 14%, 93%)',



      },
    },
  },
  plugins: [],
}

