module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '700' : '700px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
