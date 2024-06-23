import {
  View,
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import RNPickerSelect from 'react-native-picker-select'
import PickerSelect from 'react-native-picker-select'
import { theme } from '../../styles'
import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

const MyHeader = ({ hideOrganization, navigation, backPath }) => {
  const [organization, setOrganization] = useState({})
  const [user, setUser] = useState({})

  useEffect(() => {
    const getAsyncStorage = async () => {
      let orgaFromAsyncStorage = await AsyncStorage.getItem('organization') // Store organization data
      let userFromAsyncStorage = await AsyncStorage.getItem('userInfo') // Store organization data
      console.log('orgaFromAsyncStorage')
      console.log(JSON.parse(orgaFromAsyncStorage))
      setOrganization(JSON.parse(orgaFromAsyncStorage))
      console.log('userFromAsyncStorage')
      setUser(JSON.parse(userFromAsyncStorage))
      console.log(JSON.parse(userFromAsyncStorage))
    }

    getAsyncStorage()
  }, [])

  const [selectedItem, setSelectedItem] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const organisation = [1, 2, 4, 5, 6, 7, 8, 9]

  const getRandomColor = () => {
    const getRandomComponent = () => Math.floor(Math.random() * 128) // Adjust this value for darkness

    const red = getRandomComponent()
    const green = getRandomComponent()
    const blue = getRandomComponent()

    return `rgb(${red}, ${green}, ${blue})`
  }
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: 'row',

        marginHorizontal: 2,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingBottom: 5,
        backgroundColor: theme.colors.primaryLight,

        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        marginTop: StatusBar.currentHeight,

        color: 'black',
      }}
    >
      {backPath ? (
        <Ionicons name="arrow-back-circle" size={40} color={theme.colors.primary} />
      ) : hideOrganization ? (
        <Ionicons
          name="menu"
          size={40}
          color={theme.colors.primary}
          onPress={() => navigation.openDrawer()}
        />
      ) : (
        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 10,
            // backgroundColor: 'red',
            // borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            height: 40,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <Pressable
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => setModalVisible(true)}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="business-center" size={30} color="black" />
              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>
                {organization?.Name}
              </Text>
            </View>
            <MaterialCommunityIcons
              style={{ transform: [{ rotate: '180deg' }] }}
              name="format-wrap-top-bottom"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <View
            style={{
              zIndex: 5,
              position: 'absolute',
              top: -5,
              right: -5,
              backgroundColor: 'red',
              borderRadius: 10,
              padding: 2,
            }}
          >
            <Text
              style={{
                zIndex: 10,
                color: 'white',
                fontSize: 10,
                width: 15,
                height: 15,
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              5
            </Text>
          </View>

          <Ionicons name="notifications" size={25} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle" size={40} color="black" />
        </TouchableOpacity>

        {/* Notifications icon (non-interactive) */}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        {/* {modalVisible ? ( */}
        {/* <View style={styles.modalBackground}> */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: '80%',
                borderBottomColor: 'black',
                paddingBottom: 5,
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'black' }}>Organisation :</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons name="close-circle" size={40} color={theme.colors.primary} />
              </Pressable>
            </View>
            {/* <View style={{ maxHeight: 300 }}> */}
            <FlatList
              style={{ height: 250, maxHeight: 250 }}
              data={user.organizations}
              renderItem={(item, index) => {
                console.log(item)
                let textColor = getRandomColor() // Set your desired text color
                return (
                  <TouchableOpacity
                    key={item?.index}
                    style={[styles.menuItem, { backgroundColor: 'white' }]}
                  >
                    <View style={styles.menuItemContent}>
                      <MaterialIcons
                        name="business-center"
                        size={24}
                        color={textColor}
                        style={styles.icon}
                      />
                      <Text
                        style={[styles.text, { color: textColor, width: '80%' }]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {item?.item?.Name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
              keyExtractor={item => item} // Use unique identifier for each item
            />
            {/* </View> */}
          </View>
        </View>
        {/* </View> */}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',

    borderRadius: 20,
    // padding: 10,
    paddingTop: 3,
    overflow: 'hidden',
    paddingHorizontal: 0,
    paddingBottom: 8,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    marginLeft: 5,
    // backgroundColor: 'red',
    width: '75%',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
})
export default MyHeader
