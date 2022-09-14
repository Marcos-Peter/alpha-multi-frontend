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
      fontSize: {
        '2xs': ['11px', {
          letterSpacing: '0.00em',
          lineHeight: '1.2',
        }]},
      backgroundImage: {
        'auction': "url('../src/assets/auction.svg')",
        'dashboard': "url('../src/assets/dashboard.svg')",
        'logout': "url('../src/assets/logout.svg')",
        'wallet': 'url("../src/assets/wallet.svg")',
        'icon-search': "url('../src/assets/icon-search.svg')",
        'heart': 'url("../src/assets/heart.svg")',
        'trash': 'url("../src/images/trash.svg")',
        'lupa': 'url("../src/images/lupa.svg")',
        'x': 'url("../src/images/x.svg")',
        'save': 'url("../src/images/save.svg")',
        '+': 'url("../src/images/mais.svg")',
        'clock-time': 'url("../src/images/clock-time.svg")',
        'checkmark': 'url("../src/images/checkmark.svg")',
        'x-grey': 'url("../src/images/x-grey.svg")',
        'live': 'url("../src/images/live.svg")',
        'selectedNavbar': 'url("../src/images/selectedNavbar.svg")',
        'menu-black': 'url("../src/images/menu-black.svg")',
        'menu-white': 'url("../src/images/menu-white.svg")',
        'lupa-white': 'url("../src/images/lupa-white.svg")',
      },
      colors: {},
      borderRadius: {
        md: '0.25rem',
      },
    },
  },
  plugins: [],
};
