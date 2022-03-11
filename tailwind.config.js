module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gm-black": "#23240D",
        "gm-grey": "#6E6E60",
        "gm-brown": "#CCAF8F",
        "gm-logo" : "#4D4D3B",
        "gm-border-grey": "#ADA49B",
      },
      fontFamily: {
        display: ["Manrope', sans-serif"],
        sans: ["Raleway', sans-serif"],
      },
      keyframes:{
        'pop-out':{
          'from' : {transform: 'scale(0)'} ,
          'to': {transform: 'scale(1)'}
        }
      },
      animation:{
        'pop-out' : 'pop-out 750ms ease'
      },
    },
  },
  plugins: [],
}
