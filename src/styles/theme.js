import { DefaultTheme, configureFonts } from 'react-native-paper'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const SIZES = {
  base: 8,
  padding: 10,

  screenWidth: width,
  screenHeight: height,

  screenPadding: 16,
}

export const FONTS = {
  light: 'Inter-Light',
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  bold: 'Inter-Bold',
}

// export const FONTS = {
//   light: 'ProductSans-Light',
//   regular: 'ProductSans-Regular',
//   medium: 'ProductSans-Medium',
//   bold: 'ProductSans-Bold',
// };

const fontConfig = {
  ios: {
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Bold',
      fontWeight: 'normal',
    },
  },
  android: {
    light: {
      fontFamily: 'Inter-Light',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Inter-Bold',
      fontWeight: 'normal',
    },
  },
}

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8a63d2',
    primaryLight: '#bba5f5',

    marketPrimary: '#FA734A',
    shoppingPirmary: '#FA734A',

    walletAlgeria: '#28905C',
    walletEurope: '#1E3799',
    paypal: '#FFC439',

    secondary: '#FE5E56',
    accent: '#F6F4EE',

    error: '#EB4545',
    success: '#0AB562',

    white: '#ffffff',
    black: '#212529',
    red: '#D23C3C',
    grayLight: '#D9D9D9',
    'muted-500': '#737373',
  },
  sizes: {
    ...SIZES,
    containerRadius: 24,
  },
}
