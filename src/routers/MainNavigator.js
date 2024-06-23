import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

// import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Auth from '../containers/Auth'
// import { auth } from '../config'
import auth from '@react-native-firebase/auth'

import Login from '../containers/Auth/Login'
import Register from '../containers/Auth/Register'
import HomeNavigator from './HomeNavigator'
import NotificationsScreen from '../containers/Notifications'
import ProfileScreen from '../containers/ProfileScreen'
import ProjectDrawer from './ProjectDrawer'
import TaskNavigator from './TaskNavigator'
const Stack = createStackNavigator()

const AuthStack = createStackNavigator()
const MainStack = createStackNavigator()
const RootStack = createStackNavigator()

const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Auth">
    <AuthStack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
    <AuthStack.Screen name="Login" component={Login} options={{ headerShown: true }} />
    <AuthStack.Screen name="Register" component={Register} options={{ headerShown: true }} />
  </AuthStack.Navigator>
)

const AppNavigator = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
    <MainStack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{ headerShown: true }}
    />
    <MainStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
    <MainStack.Screen name="Project" component={ProjectDrawer} options={{ headerShown: false }} />
    <MainStack.Screen name="Task" component={TaskNavigator} options={{ headerShown: true }} />
  </MainStack.Navigator>
)
const MainNavigator = () => {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) return null
  return (
    <RootStack.Navigator>
      {user ? (
        <RootStack.Screen
          name="MainStack"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <RootStack.Screen
          name="AuthStack"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  )

  return <React.Fragment>{user ? <AppNavigator /> : <AuthNavigator />}</React.Fragment>

  // return (
  //   <Stack.Navigator name="Main">
  //     {user ? (
  //       <Stack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
  //     ) : (
  //       <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
  //     )}
  //     <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
  //     <Stack.Screen name="Register" component={Register} options={{ headerShown: true }} />
  //     <Stack.Screen
  //       name="Notifications"
  //       component={NotificationsScreen}
  //       options={{ headerShown: true }}
  //     />
  //     <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
  //     <Stack.Screen name="Project" component={ProjectDrawer} options={{ headerShown: false }} />
  //     <Stack.Screen name="Task" component={TaskNavigator} options={{ headerShown: true }} />

  //     {/* Add more screens here */}
  //   </Stack.Navigator>
  // )
}

export default MainNavigator
