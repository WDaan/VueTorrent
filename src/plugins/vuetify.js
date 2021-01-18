import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/lib/util/colors'
import variables from '@/styles/colors.scss'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    options: {
      customProperties: true
    },
    dark: false,
    themes: {
      light: {
        accent: variables.download,
        selected: colors.grey.lighten2,
        ...variables
      },
      dark: {
        accent: variables.download,
        selected: colors.grey.darken1,
        ...variables
      }
    }
  }
})
