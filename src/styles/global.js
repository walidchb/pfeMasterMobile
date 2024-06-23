import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

import {theme, FONTS} from './index';

const BUTTON_HEIGHT = 54;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    // padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 8,
    margin: 8,
    width: width * 0.95,
    borderRadius: 27,
  },

  // Button with arrow
  btnContainer: {
    borderRadius: 1000,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 1000,
    height: BUTTON_HEIGHT,
    paddingHorizontal: 56,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: theme.colors.white,
  },
  btnIcon: {
    position: 'absolute',
    height: BUTTON_HEIGHT,
    width: 24,
    marginLeft: 'auto',
    marginRight: 20,
    tintColor: theme.colors.white,
  },
  btnIconRight: {
    right: 0,
  },
  btnPrimary: {
    backgroundColor: theme.colors.primary,
  },
  btnDisabled: {
    backgroundColor: '#ced4da',
  },
  btnPrimaryOutline: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.primary,
  },

  // Snackbar
  snackbar: {
    position: 'absolute',
    elevation: 0,
    shadowColor: 'transparent',
    borderRadius: 8,
    zIndex: 99,
    bottom: 14,
    marginHorizontal: theme.sizes.screenPadding,
    backgroundColor: theme.colors.black,
  },
  // Text Input
  textInput: {
    backgroundColor: 'white',

    borderColor: '#ADB5BD',
  },
});
