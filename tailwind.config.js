const themeColors = {
  "primary" : "#f1ede5",
  "secondary" : "#e5d8cd",
}

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    ringColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    extend: {
      height: {
        '700' : '700px',
        '500' : '500px',
      },
      backgroundImage: theme => ({
        'revolution': "url('/assets/images/revolution.png')",
      }),
      transitionProperty: {
        'height': 'height, all',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
