import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { theme } from '../styles'
import ProjectBoard from '../containers/ProjectBoard'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ProjectKanban from '../containers/ProjectKanban'
import ProjectTimeLine from '../containers/ProjectTimeLine'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ item, onPress, focused, ...rest }) => {
  const iconTab = () => {
    let size = 30
    if (item.name === 'ProjectBoard') {
      return (
        <Image
          source={require(`../../assetes/dashboard.png`)}
          style={{ width: size, marginHorizontal: 10, height: size }}
        />
      )
    } else if (item.name === 'ProjectTimeLine') {
      return (
        <Image
          source={require(`../../assetes/timeline.png`)}
          style={{ width: size, marginHorizontal: 10, height: size }}
        />
      )
    } else if (item.name === 'ProjectKanban') {
      return (
        <Image
          source={require(`../../assetes/planning.png`)}
          style={{ width: size, marginHorizontal: 10, height: size }}
        />
      )
    } else if (item.name === 'My Team') {
      return (
        <Image
          source={require(`../../assetes/partners.png`)}
          style={{ width: size, marginHorizontal: 10, height: size }}
        />
      )
    }
  }
  return (
    <TouchableOpacity
      // key={index}
      onPress={onPress}
      style={{
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: focused ? theme.colors.primary : 'white',
        // paddingVertical: focused && label === 'YourTabName' ? 10 : 0,
      }}
    >
      {iconTab()}
      <Text style={{ color: focused ? 'white' : 'gray' }}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const CustomDrawerItemList = props => {
  const onPress = item => {
    const event = props.navigation.emit({ type: 'tabPress', target: item.key })

    if (!event.defaultPrevented) {
      props.navigation.navigate(item.name)
    }
  }
  console.log(props.state)
  return (
    <View>
      {props.state.routes.map((item, index) => (
        // <Text style={{ color: 'black' }}>{item}</Text>
        <CustomDrawerItem
          key={index} // Ensure each item has a unique key
          item={item}
          onPress={() => onPress(item)} // Provide index to handle navigation
          focused={index === props.state.index}
        />
      ))}
    </View>
  )
}

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Ionicons
          onPress={() => props.navigation.navigate('Home', { screen: 'Board' })}
          style={{ marginLeft: 10 }}
          name="arrow-back-circle"
          size={40}
          color={theme.colors.primary}
        />

        <View
          style={{
            width: '100%',
            paddingTop: 0,
            paddingBottom: 40,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require(`../../assetes/dashboard.png`)}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ color: 'black' }}>Project name</Text>
          <Text style={{ color: 'gray' }}>walid chebbab</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="settings" size={20} color="blue" />
            <Text style={{ color: 'blue', textDecorationLine: 'underline', marginLeft: 5 }}>
              About
            </Text>
          </View>
        </View>
        {/* <DrawerItemList {...props} /> */}
        <CustomDrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: 'yellow',
    // Styles for header section
  },
  drawerFooter: {
    // Styles for footer section
  },
})

const ProjectDrawer = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{ drawerStyle: { width: '20vw' } }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="ProjectBoard"
        component={ProjectBoard}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProjectKanban"
        component={ProjectKanban}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ProjectTimeLine"
        component={ProjectTimeLine}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}

export default ProjectDrawer
