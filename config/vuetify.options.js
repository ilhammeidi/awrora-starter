import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  grayscale: {
    primary: colors.blueGrey.darken1, // primary main
    primarylight: colors.blueGrey.lighten4, // primary light
    primarydark: colors.blueGrey.darken4, // primary dark
    secondary: colors.brown.base, // secondary main
    secondarylight: colors.brown.lighten4, // secondary light
    secondarydark: colors.brown.darken4, // secondary dark
    anchor: colors.brown.base // link
  },
}

export const theme = {
  ...palette.grayscale
}


export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
