import { View, Dimensions, Text } from 'react-native'
import React from 'react'
import MyLoader from '../../components/MyLoader'

const SplashScreen = () => {
  const { width } = Dimensions.get('window')
  const { height } = Dimensions.get('window')

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        backgroundColor: 'white',
      }}
    >
      <MyLoader />
    </View>
  )
}

export default SplashScreen
