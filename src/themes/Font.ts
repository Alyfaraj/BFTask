import { I18nManager, Platform } from 'react-native';
const IsAndroid = Platform.OS == 'android';

const BOLD = "Cairo-Bold"
const MEDIUM = "Cairo-SemiBold"
const REGULAR = "Cairo-Regular"
const LIGHT = "Cairo-Light"


export default {
  BOLD: {
    fontFamily: BOLD,
    fontWeight: Platform.select({
      ios: '700',
      android: undefined,
    }),
  },
  MEDIUM: {
    fontFamily: MEDIUM,
    fontWeight: Platform.select({
      ios: '500',
      android: undefined,
    }),
  },
  REGULAR: {
    fontFamily: REGULAR,
    fontWeight: Platform.select({
      ios: '400',
      android: undefined,
    }),
  },
  LIGHT: {
    fontFamily: LIGHT,
    fontWeight: Platform.select({
      ios: '400',
      android: undefined,
    }),
  },
};
