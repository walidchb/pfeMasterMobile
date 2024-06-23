import { ISO_8601 } from 'moment'
import { Platform, StyleSheet } from 'react-native'
import { theme, FONTS, scaleFont, scaleSize } from './../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: theme.colors.white,
  },

  // Guest Mode
  guestModeLink: {
    zIndex: 2,
    paddingHorizontal: theme.sizes.screenPadding,
  },
  guestModeLinkText: {
    fontSize: scaleFont(15),
    lineHeight: scaleFont(24),
    fontFamily: FONTS.medium,
    color: '#FB6514',
    textAlign: 'right',
    marginHorizontal: 10,
  },
  // Onboarding
  onboarding: {
    flex: 1,
    // marginTop:
    //   Platform.OS === 'ios'
    //     ? 10
    //     : theme.sizes.screenHeight > 750
    //     ? theme.sizes.screenHeight * 0.06
    //     : theme.sizes.screenHeight * 0.04,
  },
  onboardingItem: {
    width: theme.sizes.screenWidth,
    paddingHorizontal: theme.sizes.screenPadding,
    alignItems: 'center',
    marginBottom: scaleSize(24),
  },
  onboardingIllus: {
    width: theme.sizes.screenHeight * 0.3,
    height: theme.sizes.screenHeight * 0.3,
    marginBottom: theme.sizes.screenHeight * 0.03,
  },
  onboardingTitle: {
    fontSize: scaleFont(30),
    fontWeight: '700',
    color: '#61333D',
    lineHeight: scaleFont(30.6),
  },
  onboardingText: {
    fontSize: scaleFont(14),
    fontWeight: '400',
    color: '#89666E',
    marginTop: scaleSize(8),
  },
  onboardingDots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardingDot: {
    width: scaleSize(32),
    height: scaleSize(6),
    borderRadius: 4,
    backgroundColor: '#F4F1F1',
    marginHorizontal: 4,
  },
  onboardingDotActive: {
    backgroundColor: theme.colors.primary,
  },

  // Buttons
  authButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEDEC',
    padding: scaleSize(16),
  },
  loginBtn: {
    width: '100%',
    height: scaleSize(54),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scaleSize(5),
    marginLeft: scaleSize(5),
    marginTop: scaleSize(8),
    borderRadius: scaleSize(16),
    backgroundColor: theme.colors.primary,
  },
  registerBtn: {
    width: '100%',
    height: scaleSize(54),
    borderWidth: 1,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scaleSize(5),
    marginLeft: scaleSize(5),
    marginTop: scaleSize(8),
    borderRadius: scaleSize(16),
  },
  authBtnLabel: {
    fontSize: scaleFont(16),
    fontWeight: '500',
  },
  socialAuthButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:
      theme.sizes.screenHeight > 750
        ? theme.sizes.screenHeight * 0.055
        : theme.sizes.screenHeight * 0.015,
    paddingHorizontal: theme.sizes.screenPadding,
  },
  socialAuthButton: {
    elevation: 0,
    shadowColor: 'transparent',
    marginHorizontal: 12,
  },
  orText: {
    fontSize: scaleFont(15),
    fontFamily: FONTS.regular,
    color: '#343B41',
    textAlign: 'center',
    marginTop: theme.sizes.screenHeight * 0.028,
    marginBottom: theme.sizes.screenHeight * 0.022,
  },

  legalTextContainer: {
    marginTop: 20,
  },
  legalText: {
    fontSize: scaleFont(13),
    fontFamily: FONTS.regular,
    lineHeight: 19,
    color: '#868e96',
    textAlign: 'center',
    paddingHorizontal: theme.sizes.screenPadding * 2,
    maxWidth: 360,
    alignSelf: 'center',
  },
  legalTextLink: {
    color: theme.colors.primary,
  },

  // Snackbar
  snackbar: {
    position: 'absolute',
    backgroundColor: '#212529',
    bottom: 84,
    zIndex: 99,
    padding: 2,
    elevation: 0,
    borderRadius: 14,
  },

  referralButton: {
    backgroundColor: 'rgba(252, 127, 89, 0.1)',
    borderWidth: 1,
    borderRadius: scaleSize(34),
    borderColor: '#FC7F59',
    paddingVertical: scaleSize(8),
    paddingHorizontal: scaleSize(16),
    marginTop: 8,
  },
  referralTxt: { fontWeight: '500', fontSize: scaleFont(16), color: '#FC7F59' },

  animationHeader: {
    width: theme.sizes.screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
})
