/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        fullHD: '1700px',
      },
      fontFamily: {
        body: ['Poppins'],
      },
      backgroundImage: {
        'auction': "url('./src/assets/auction.svg')",
        'dashboard': "url('./src/assets/dashboard.svg')",
        'logout': "url('./src/assets/logout.svg')",
        'wallet': 'url("./src/assets/wallet.svg")',
        'icon-search': "url('./src/assets/icon-search.svg')",
        'heart': 'url("./src/assets/heart.svg")',
        'trash': 'url("./src/images/trash.svg")',
        'lupa': 'url("./src/images/lupa.svg")',
        'x': 'url("./src/images/x.svg")',
        'save': 'url("./src/images/save.svg")',
        '+': 'url("./src/images/mais.svg")',
        'clock-time': 'url("./src/images/clock-time.svg")',
        'checkmark': 'url("./src/images/checkmark.svg")',
        'x-grey': 'url("./src/images/x-grey.svg")',
        'live': 'url("./src/images/live.svg")',
      },
      colors: {},
      borderRadius: {
        md: '0.25rem',
      },
    },
  },
  plugins: [],
};
