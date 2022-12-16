/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        container: 'rgba(41, 59, 89, 0.9)',
        button: 'rgba(6, 12, 17, 1)',
        buttonHover: 'rgba(6, 12, 17, 0.7)',
        dk: '#C41E3A',
        dh: '#A330C9',
        druid: '#FF7C0A',
        evoker: '#33937F',
        hunter: '#AAD372',
        mage: '#3FC7EB',
        monk: '#00FF98',
        pal: '#F48CBA',
        priest: '#FFFFFF',
        rogue: '#FFF468',
        sham: '#0070DD',
        demo: '#8788EE',
        war: '#C69B6D',
      },
      fontFamily: {
        'open-sans': ['Open Sans'],
      },
      backgroundImage: {
        'main': "url('./assets/images/bg.jpg')",
      }
  },
  },
  plugins: [],
}