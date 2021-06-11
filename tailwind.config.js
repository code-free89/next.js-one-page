const themeColors = {
  "yellow-light" : "#f1ede5",
  "yellow-normal" : "#e5d8cd",
}

module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [/^grid-cols-/],
    },
  },
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
        '600' : '600px',
        '500' : '500px',
      },
      maxWidth: {
        '200': '200px',
        '1920': '1920px',
      },
      minWidth: {
        '24': '6rem',
        '10': '2.5rem'
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
