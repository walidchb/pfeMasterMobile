// App.js

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../styles'
import BoardScreen from '../containers/BoardScreen'
import SchedulerScreen from '../containers/SchedulerScreen'
import KanbanScreen from '../containers/KanbanScreen'
import MyTeamScreen from '../containers/MyTeamScreen'
import { Image } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
// import adofg from '../../assetes/dashboard.png'

const Tab = createBottomTabNavigator()

const CustomTabBar = ({ state, descriptors, navigation }) => {
  // console.log(state.routes)
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 30,
        margin: 10,
        height: 70,
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {state.routes.map((route, index) => {
        const option = route.name
        // console.log(option)
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key })

          if (!event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const iconTab = () => {
          let size = 30
          if (route.name === 'Board') {
            return (
              <Image
                source={require(`../../assetes/dashboard.png`)}
                style={{ width: size, height: size }}
              />
            )
          } else if (route.name === 'Scheduler') {
            return (
              <Image
                source={require(`../../assetes/timeline.png`)}
                style={{ width: size, height: size }}
              />
            )
          } else if (route.name === 'Kanban') {
            return (
              <Image
                source={require(`../../assetes/planning.png`)}
                style={{ width: size, height: size }}
              />
            )
          } else if (route.name === 'My Team') {
            return (
              <Image
                source={require(`../../assetes/partners.png`)}
                style={{ width: size, height: size }}
              />
            )
          }
        }
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              width: '25%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isFocused ? theme.colors.primary : 'white',
              paddingVertical: isFocused && route.name === 'YourTabName' ? 10 : 0,
            }}
          >
            {iconTab()}
            <Text style={{ color: isFocused ? 'white' : 'gray' }}>{option}</Text>
          </TouchableOpacity>
        )
      })}
      {/* <Text style={{ color: 'black' }}>walid</Text> */}
    </View>
  )
}
const HomeNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     if (route.name === 'Board') {
      //       return (
      //         <Image
      //           source={require(`../../assetes/dashboard.png`)}
      //           style={{ width: size, height: size }}
      //         />
      //       )
      //     } else if (route.name === 'Scheduler') {
      //       return (
      //         <Image
      //           source={require(`../../assetes/timeline.png`)}
      //           style={{ width: size, height: size }}
      //         />
      //       )
      //     } else if (route.name === 'Kanban') {
      //       return (
      //         <Image
      //           source={require(`../../assetes/planning.png`)}
      //           style={{ width: size, height: size }}
      //         />
      //       )
      //     } else if (route.name === 'My Team') {
      //       return (
      //         <Image
      //           source={require(`../../assetes/partners.png`)}
      //           style={{ width: size, height: size }}
      //         />
      //       )
      //     }
      //   },
      //   tabBarStyle: {
      //     // backgroundColor: 'red',
      //     // paddingTop: 10, // Adjust padding for visual effect
      //     borderRadius: 20,
      //     marginHorizontal: 10,
      //     marginBottom: 10,

      //     // borderTopLeftRadius: 20,
      //     // borderTopRightRadius: 20,
      //     overflow: 'hidden', // Clip content to avoid unwanted corners
      //   },
      //   tabBarActiveBackgroundColor: theme.colors.primary,
      //   tabBarActiveTintColor: 'white',
      //   // activeTintColor: 'white', // Change to your desired active color
      //   // inactiveTintColor: 'gray', // Change to your desired inactive color
      // })}
      //   screenOptions={{}}
    >
      <Tab.Screen name="Board" component={BoardScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Scheduler" component={SchedulerScreen} options={{ headerShown: false }} />
      {/* <Tab.Screen name="Kanban" component={KanbanScreen} options={{ headerShown: false }} /> */}
      <Tab.Screen name="My Team" component={MyTeamScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default HomeNavigator
