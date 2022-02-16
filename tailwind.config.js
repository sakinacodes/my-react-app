module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    }
  },
  plugins: [require('tailwindcss'), require('autoprefixer')]
}
