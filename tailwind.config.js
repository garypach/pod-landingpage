/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'chivo': ['Chivo', 'sans-serif']
    },
    fontSize: {
      'title-mobile': ['26px', {
        lineHeight: '38px',
        fontWeight: '400',
      }],
      'title': ['52px', {
        lineHeight: '62px',
        fontWeight: '400',
      }],
      'body-mobile': ['15px', {
        lineHeight: '28px',
        fontWeight: '400',
      }],
      'body': ['18px', {
        lineHeight: '28px',
        fontWeight: '400',
      }]
    },
    colors: {
      'green': '#54E6AF',
      'light-green':'#B3FFE2',
      'dark-grey': '#2C344B',
      'navy': '#121725',
      'light-grey': '#5A668A',
      'light-purple': '#C2CBE5',
      'red' : '#FB3E3E',
    },
    
    extend: {},
  },
  plugins: [],
}