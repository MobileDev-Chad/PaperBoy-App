import { Platform } from 'react-native'

import { COLORS, FONTS, SIZES } from './theme'

export default {
  COLORS,
  text: {
    color: COLORS.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
}
