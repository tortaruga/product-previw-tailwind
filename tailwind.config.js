/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    './**/*.{html,js}',
    './**/*.{html,js}',
    './index.html',],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-image': "url('./images/image-product-mobile.jpg')",
        'desktop-image': "url('./images/image-product-desktop.jpg')",
      },
      colors: {
         'cyan' : 'hsl(158, 36%, 37%)',
         'cream' : 'hsl(30, 38%, 92%)',
         'dark-blue': 'hsl(212, 21%, 14%)',
         'grayish-blue': 'hsl(228, 12%, 48%)'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
        fontFamily: {
          'montserrat': [
            '"Montserrat", sans-serif',
          ],
          'fraunces': [
            '"Fraunces", sans-serif',
          ]
        },
        letterSpacing: {
          'super-wide': '0.2rem',
        }
    },
  },
  plugins: [],
}
