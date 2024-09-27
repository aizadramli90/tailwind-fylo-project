/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        sans: ['Raleway', 'sans-serif']
      },
      colors: {
        mineShaft: 'hsl(0, 0%, 20%)',
        aquamarineBlue: 'hsl(176, 68%, 64%)',
        athensGray: 'hsl(210, 20%, 98%)',
        athensGray2: 'hsl(220, 14%, 93%)',
        mirage: 'hsl(217, 27%, 15%)',
        mirage2: 'hsl(217, 27%, 13%)',
        ebonyClay: 'hsl(219, 30%, 18%)',
        fireFly: 'hsl(215, 52%, 9%)',
        blueRibbon: 'hsl(217, 100%, 52%)',
        cerulean: 'hsl(193, 93%, 48%)',
        carnation: 'hsl(0, 84%, 66%)',
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
        'logo-light-mode': "url('../images/logo-light-mode.svg')",
        'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')",
      })
      
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    },
  },
  plugins: [],
}

