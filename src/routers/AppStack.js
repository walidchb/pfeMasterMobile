import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigator from './MainNavigator'
import SplashScreen from '../containers/SplashScreen'

const AppStack = () => {
  const [isAppReady, setAppReady] = useState(false)

  useEffect(() => {
    // Simulate async initialization (e.g., fetching data, loading assets)
    setTimeout(() => {
      setAppReady(true)
    }, 2000) // 2 seconds for demonstration
  }, [])

  return isAppReady ? (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <MainNavigator />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <SplashScreen />
    </SafeAreaView>
  )
}

export default AppStack
