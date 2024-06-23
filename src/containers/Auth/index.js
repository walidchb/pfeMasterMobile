import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
  I18nManager,
} from 'react-native'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { scaleFont, scaleSize, theme } from '../../styles'

const onboardingData = [
  {
    id: 1,
    animation: require('../../../assetes/undraw_mobile_content_xvgr.png'),
    title: 'Customize Your Workflow',
    text: 'Effortlessly add, edit, and organize tasks with our intuitive interface. Set due dates to track deadlines, prioritize tasks for better focus, and set reminders to stay on top of your to-do list. TaskMaster helps you manage everything efficiently and achieve your goals.',
  },
  {
    id: 2,
    animation: require('../../../assetes/undraw_undraw_undraw_businessman_e7v0_qrld_(1)_hvmv.png'),
    title: '+100 000 services et produits disponibles',
    text: "Découvrez la recharge mobile et l'ADSL, ainsi que des supermarchés, restaurants et des magasins de shopping offrant des centaines de grandes marques.",
  },
  {
    id: 3,
    animation: require('../../../assetes/undraw_undraw_undraw_undraw_love_it_xkc2_gyie_-1-_ty26_(1)_bkkj.png'),
    title: 'Offrez des bons d’achat temtem Gifts',
    text: 'Envoyez du crédit temtem Gifts à vos proches pour qu’ils puissent acheter des produits et services temtem One',
  },
  {
    id: 4,
    animation: require('../../../assetes/undraw_walking_in_rain_vo9p.png'),
    title: 'Offrez des bons d’achat temtem Gifts',
    text: 'Envoyez du crédit temtem Gifts à vos proches pour qu’ils puissent acheter des produits et services temtem One',
  },
]

const Auth = ({ navigation }) => {
  const [onboardingCurrentIndex, setOnboardingCurrentIndex] = useState(0)

  const flatListRef = useRef()

  const handeScrollFlatList = useCallback(({ nativeEvent }) => {
    const index = nativeEvent.contentOffset.x / theme.sizes.screenWidth
    const roundIndex = Math.round(index)
    const distance = Math.abs(roundIndex - index)
    if (distance < 0.4) {
      setOnboardingCurrentIndex(roundIndex)
    }
  }, [])

  const renderOnboardingItem = ({ item }) => (
    <View style={styles.onboardingItem}>
      {/** Animated header */}
      <View style={styles.animationHeader}>
        <Image
          style={{ width: '90%', height: '80%', transform: [{ scale: 0.9 }] }}
          source={item.animation}
        />
        {/* <Lottie
          source={item.animation}
          autoPlay
          speed={onboardingCurrentIndex === 1 ? -1 : 1}
          style={{ width: '100%', marginTop: -10, scaleX: 1.05 }}
        /> */}
      </View>
      {/** Content */}
      {/* <LinearGradient
        colors={['#FFF', '#FFF', '#FFF']}
        locations={[0, 0.1059, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          width: theme.sizes.screenWidth,
          paddingHorizontal: 16,
          marginTop: -16,
        }}
      > */}
      <View style={{ marginBottom: scaleSize(12) }}>
        <Text style={styles.onboardingTitle}>{item.title}</Text>
        <Text style={styles.onboardingText}>{item.text}</Text>
      </View>
      {/* {item?.icons?.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {item.icons.map(icon => (
            <View
              key={icon.name}
              style={{
                height: scaleSize(32),
                borderRadius: scaleSize(6),
                borderColor: '#EEEDEC',
                borderWidth: 1,
                marginRight: scaleSize(12),
                marginBottom: scaleSize(8),
                flexDirection: icon.label?.position === 'bottom' ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: scaleSize(icon.sizes.paddingHorizontal),
                position: 'relative',
              }}
            >
              <SvgXml
                xml={icon.xml}
                style={{
                  marginRight: icon.label?.position === 'right' ? scaleSize(4) : 0,
                  marginBottom: icon.label?.position === 'bottom' ? scaleSize(1.333) : 0,
                  zIndex: 10,
                }}
                width={scaleSize(icon.sizes.width)}
                height={scaleSize(icon.sizes.height)}
              />
              {icon.label?.type === 'text' ? (
                <Text
                  style={{
                    color: '#4D4847',
                    fontSize: scaleFont(9),
                    letterSpacing: -scaleFont(0.135),
                    fontWeight: '900',
                  }}
                >
                  {icon.label.content}
                </Text>
              ) : icon.label?.type === 'svg' ? (
                icon.label.position === 'back' ? (
                  <View
                    style={{
                      position: 'absolute',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      zIndex: 0,
                    }}
                  >
                    <SvgXml
                      xml={icon.label.content}
                      width={scaleSize(icon.label.sizes.width)}
                      height={scaleSize(icon.label.sizes.height)}
                    />
                  </View>
                ) : (
                  <SvgXml
                    xml={icon.label.content}
                    width={scaleSize(icon.label.sizes.width)}
                    height={scaleSize(icon.label.sizes.height)}
                  />
                )
              ) : null}
            </View>
          ))}
        </View>
      )} */}
      {/* </LinearGradient> */}
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar showHideTransition="none" translucent backgroundColor="transparent" />

      <View style={styles.onboarding}>
        <FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={onboardingData}
          renderItem={renderOnboardingItem}
          keyExtractor={item => item.id}
          scrollEventThrottle={16}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 20,
          }}
          onScroll={handeScrollFlatList}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: scaleSize(24),
            paddingHorizontal: scaleSize(24),
          }}
        >
          <TouchableOpacity
            disabled={onboardingCurrentIndex <= 0}
            style={{
              backgroundColor: 'white',
              borderColor: onboardingCurrentIndex === 0 ? 'grey' : theme.colors.primary,
              borderWidth: 1,
              borderRadius: scaleSize(16),
              paddingHorizontal: scaleSize(24),
              paddingVertical: scaleSize(12),
            }}
            onPress={() => {
              if (onboardingCurrentIndex > 0) {
                flatListRef.current?.scrollToIndex({
                  animated: true,
                  index: onboardingCurrentIndex - 1,
                })
              }
            }}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={24}
              color={onboardingCurrentIndex === 0 ? 'grey' : theme.colors.primary}
            />
          </TouchableOpacity>
          <View style={[styles.onboardingDots]}>
            {onboardingData.map((_, index) => {
              const displayIndex = I18nManager.isRTL ? onboardingData.length - 1 - index : index
              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.onboardingDot,
                    displayIndex === onboardingCurrentIndex && styles.onboardingDotActive,
                  ]}
                />
              )
            })}
          </View>
          <TouchableOpacity
            disabled={onboardingCurrentIndex >= 3}
            style={{
              backgroundColor: 'white',
              borderColor: onboardingCurrentIndex === 3 ? 'grey' : theme.colors.primary,
              borderWidth: 1,
              color: 'black',
              borderRadius: scaleSize(16),
              paddingHorizontal: scaleSize(24),
              paddingVertical: scaleSize(12),
            }}
            onPress={() => {
              if (onboardingCurrentIndex < onboardingData.length - 1) {
                flatListRef.current?.scrollToIndex({
                  animated: true,
                  index: onboardingCurrentIndex + 1,
                })
              }
            }}
          >
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={onboardingCurrentIndex === 3 ? 'grey' : theme.colors.primary}
            />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.authButtons}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
              <Text style={{ ...styles.authBtnLabel, color: 'white' }}>Se Connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerBtn}
              onPress={() => {
                const url = 'https://www.youtube.com/watch?v=xdLiifeIML4&list=RDpbOVrFsrwsA&index=4'
                Linking.openURL(url).catch(err => console.error("Couldn't load page", err))
              }}
            >
              <Text style={{ ...styles.authBtnLabel, color: theme.colors.primary }}>
                S'inscrire
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Auth
