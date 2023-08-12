/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive']
      },

      colors: {
        background: '#F2F5F9'
      }
    }
  },
  plugins: []
};
