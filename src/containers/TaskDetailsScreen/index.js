import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { Transition } from 'react-native-reanimated'
import { theme } from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TaskDetailsScreen = () => {
  function getColor(letter) {
    switch (letter.toLowerCase()) {
      case 'a':
        return 'red'
      case 'b':
        return 'blue'
      case 'c':
        return 'green'
      case 'd':
        return 'yellow'
      case 'e':
        return 'purple'
      default:
        return 'black' // default color if the input is not one of the specified letters
    }
  }
  const [showDetails, setShowDetails] = useState(true)
  const [showAssigneeModal, setShowAssigneeModal] = useState(false)
  const [ShowShareModal, setShowShareModal] = useState(false)
  const [sent, setsent] = useState(false)

  const [assigned, setAssigned] = useState(false)
  const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  return (
    <View style={{ minHeight: '100%' }}>
      <View style={{ minHeight: '100%', backgroundColor: 'white', padding: 8, overflowY: 'auto' }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <View
            style={{
              backgroundColor: 'red',
              marginVertical: 10,
              // marginLeft: 20,
              borderRadius: 10,
              overflow: 'hidden',
              width: '60%',
            }}
          >
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {
                  label: 'TO DO',
                  value: 'TO DO',
                  icon: () => <Icon name="check" size={18} color="black" />,
                },
                {
                  label: 'IN PROGRESS',
                  value: 'IN PROGRESS',
                  icon: () => <Icon name="play" size={18} color="black" />,
                },
                {
                  label: 'IN REVIEW',
                  value: 'IN REVIEW',
                  icon: () => <Icon name="eye" size={18} color="black" />,
                },
                {
                  label: 'DONE',
                  value: 'DONE',
                  icon: () => <Icon name="check-circle" size={18} color="black" />,
                },
              ]}
              style={{
                inputIOS: {
                  backgroundColor: theme.colors.primary,
                  color: 'white', // white text
                  paddingHorizontal: 10, // Adjust as needed
                  paddingVertical: 8, // Adjust as needed
                },
                inputAndroid: {
                  // marginLeft: 20,
                  backgroundColor: theme.colors.primary,
                  color: 'white', // Black text
                  paddingHorizontal: 10, // Adjust as needed
                  // paddingVertical: 8, // Adjust as needed
                  // borderRadius: 10, // Border radius
                  // width: '60%',
                },
                placeholder: {
                  color: 'white',
                },
              }}
            />
          </View>
          <TouchableOpacity onPress={() => setShowShareModal(true)}>
            <Icon name="share" style={{ color: 'blue', fontSize: 24 }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setShowDetails(!showDetails)}
          style={{
            marginTop: 4,
            borderRadius: showDetails ? 4 : 4,
            paddingHorizontal: 8,
            paddingVertical: 8,
            borderBottomWidth: showDetails ? 1 : 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: 'black',
          }}
        >
          <Text style={{ color: 'black' }}>Details</Text>
          <Icon name="caret-down" size={24} color="black" />
        </TouchableOpacity>
        {showDetails && (
          <View
            style={{
              padding: 16,
              borderBottomWidth: 2,
              borderRightWidth: 2,
              borderLeftWidth: 2,
              borderTopWidth: 1,
              borderRadius: 4,
              width: '100%',
              borderColor: 'black',
            }}
          >
            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'black', width: '50%' }}>Assignee</Text>
              {assigned ? (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={{ width: 24, height: 24, borderRadius: 12, marginRight: 8 }}
                    source={{ uri: 'assigned_user_image_url' }}
                  />
                  <Text style={{ color: 'black' }}>value</Text>
                </View>
              ) : (
                <View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>Unassigned</Text>
                  </View>
                  <TouchableOpacity onPress={() => setShowAssigneeModal(true)}>
                    <Text style={{ color: 'blue', textAlign: 'center', padding: 4 }}>
                      Assign it
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'black', width: '50%' }}>Priority</Text>
              <View
                style={{
                  backgroundColor: getColor('a'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>{'a'}</Text>
              </View>
            </View>
            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ width: '50%', color: 'black' }}>Created</Text>
              <Text style={{ color: 'black' }}>created</Text>
            </View>
            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ width: '50%', color: 'black' }}>Estimated Time</Text>
              <Text style={{ color: 'black' }}>estimatedTime</Text>
            </View>
            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ width: '50%', color: 'black' }}>Start Date</Text>
              <Text style={{ color: 'black' }}>startDate</Text>
            </View>
            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ width: '50%', color: 'black' }}>Progress</Text>
              <Text style={{ color: 'black' }}>progress</Text>
            </View>
            <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ width: '50%', color: 'black' }}>Reporter</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    marginRight: 8,
                    backgroundColor: 'white',
                  }}
                  source={require('../../../assetes/photo.png')}
                />
                <Text style={{ color: 'black' }}>reporter</Text>
              </View>
            </View>
          </View>
        )}
      </View>
      {showAssigneeModal && (
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setShowAssigneeModal(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="gray" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Assign it to a Team member</Text>

            <ScrollView style={styles.modalScrollView}>
              {people.map((person, index) => (
                <View key={index} style={styles.inviteContainer}>
                  <Image source={{ uri: person.imageUrl }} style={styles.inviteAvatar} />
                  <View style={styles.inviteInfo}>
                    <Text style={styles.inviteName}>{person.name}</Text>
                    <Text style={styles.inviteEmail}>Walidchebbab2001@gmail.com</Text>
                  </View>
                  {sent ? (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Ionicons name="checkmark-done-circle" size={24} color="green" />
                      <Text style={{ color: 'gray' }}>sent</Text>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={() => setsent(true)} style={styles.sendButton}>
                      <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
      {ShowShareModal && (
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setShowShareModal(false)} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="gray" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>share task with Team member</Text>

            <ScrollView style={styles.modalScrollView}>
              {people.map((person, index) => (
                <View key={index} style={styles.inviteContainer}>
                  <Image source={{ uri: person.imageUrl }} style={styles.inviteAvatar} />
                  <View style={styles.inviteInfo}>
                    <Text style={styles.inviteName}>{person.name}</Text>
                    <Text style={styles.inviteEmail}>Walidchebbab2001@gmail.com</Text>
                  </View>
                  {sent ? (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Ionicons name="checkmark-done-circle" size={24} color="green" />
                      <Text style={{ color: 'gray' }}>sent</Text>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={() => setsent(true)} style={styles.sendButton}>
                      <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  bossContainer: {
    backgroundColor: '#4a5568',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  bossImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  bossName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  bossRole: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
  },
  bossEmail: {
    fontSize: 14,
    color: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inviteText: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  scrollView: {
    paddingHorizontal: 10,
    flex: 1,
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  personInfo: {
    flex: 1,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  modalBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalScrollView: {
    maxHeight: 300,
  },
  inviteContainer: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  inviteAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  inviteInfo: {
    flex: 1,
  },
  inviteName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inviteEmail: {
    // color: 'black',
    fontSize: 14,
    color: 'gray',
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default TaskDetailsScreen
