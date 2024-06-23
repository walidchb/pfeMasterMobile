import MyHeader from '../../components/MyHeader'

import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Ionicons } from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'

function MyTeamScreen({ navigation }) {
  const [team, setTeam] = useState({})
  const [teamId, setTeamId] = useState(null)
  const [people, setPeople] = useState([])
  const [userInfo, setUserInfo] = useState({})
  const [organization, setOrganization] = useState({})

  useEffect(() => {
    const getAsyncStorage = async () => {
      const userinfo = await AsyncStorage.getItem('userInfo') // Store user data
      const orga = await AsyncStorage.getItem('organization') // Store user data

      if (userinfo && orga) {
        console.log('userinfoooooooooooooooooooooooooooo')

        let userJson = JSON.parse(userinfo)
        console.log(userinfo)
        setUserInfo(userJson)
        let orgaJson = JSON.parse(orga)
        setOrganization(orgaJson)

        const team = userJson?.team?.find(obj => obj.Organization === orgaJson._id)
        setTeamId(team?._id)
      }
      // if (typeof window !== 'undefined') {
    }
    getAsyncStorage()
  }, [])
  useEffect(() => {
    const getTeams = async values => {
      const axiosInstance = axios.create({
        baseURL: 'https://back-pfe-master.vercel.app',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      try {
        const response = await axiosInstance.get('/team/teams', {
          params: {
            _id: teamId,
          },
        })
        console.log('team from database')

        console.log(response.data[0])
        setTeam(response.data[0])
      } catch (error) {
        console.error('Error getTeams:', error)
      }
    }

    if (teamId) {
      getTeams()
    }
    // <<<<<<< HEAD
  }, [teamId])
  useEffect(() => {
    const getTeamMembers = async () => {
      const axiosInstance = axios.create({
        baseURL: 'https://back-pfe-master.vercel.app',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      try {
        const response = await axiosInstance.get('/user/users', {
          params: {
            team: teamId,
          },
        })
        console.log('people')

        console.log(response.data)
        setPeople(response.data)
      } catch (error) {
        console.error('Error getTeamMembers:', error)
      }
    }
    if (teamId) {
      getTeamMembers()
    }
  }, [teamId])
  // const people = [
  //   {
  //     name: 'John Doe',
  //     email: 'johndoe@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   },
  //   {
  //     name: 'Jane Smith',
  //     email: 'janesmith@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   },
  //   {
  //     name: 'Robert Brown',
  //     email: 'robertbrown@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  //   },
  //   {
  //     name: 'Emily Davis',
  //     email: 'emilydavis@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
  //   },
  //   {
  //     name: 'Michael Wilson',
  //     email: 'michaelwilson@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  //   },
  //   {
  //     name: 'Emma Johnson',
  //     email: 'emmajohnson@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
  //   },
  //   {
  //     name: 'David Lee',
  //     email: 'davidlee@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
  //   },
  //   {
  //     name: 'Sophia White',
  //     email: 'sophiawhite@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
  //   },
  //   {
  //     name: 'Daniel Martinez',
  //     email: 'danielmartinez@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
  //   },
  //   {
  //     name: 'Olivia Taylor',
  //     email: 'oliviataylor@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
  //   },
  //   {
  //     name: 'Christopher Harris',
  //     email: 'christopherharris@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
  //   },
  //   {
  //     name: 'Isabella Clark',
  //     email: 'isabellaclark@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
  //   },
  //   {
  //     name: 'Matthew Lewis',
  //     email: 'matthewlewis@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
  //   },
  //   {
  //     name: 'Ava Young',
  //     email: 'avayoung@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
  //   },
  //   {
  //     name: 'James Walker',
  //     email: 'jameswalker@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
  //   },
  //   {
  //     name: 'Charlotte Hall',
  //     email: 'charlottehall@example.com',
  //     imageUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
  //   },
  //   {
  //     name: 'Liam Scott',
  //     role: 'Co-Founder / CEO',
  //     imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
  //   },
  //   // More people...
  // ]

  return (
    <View style={styles.container}>
      <MyHeader navigation={navigation} backPath={null} />

      <View style={styles.header}>
        <Text style={styles.headerText}>{team?.Name} :</Text>
      </View>

      {team?.Boss ? (
        <View style={styles.bossContainer}>
          <View style={styles.bossImage}>
            <Text style={{ fontSize: 40 }}>
              {team?.Boss?.prenom[0].toUpperCase()} {team?.Boss?.nom[0].toUpperCase()}
            </Text>
          </View>

          <Text style={styles.bossName}>
            {team?.Boss?.prenom}
            {team?.Boss?.nom}
          </Text>
          <Text style={styles.bossRole}>Team Leader</Text>
          <Text style={styles.bossEmail}>{team?.Boss?.email}</Text>
        </View>
      ) : null}

      <ScrollView style={styles.scrollView}>
        {people.map((person, index) => (
          <View key={index} style={styles.personContainer}>
            <View style={styles.memberImage}>
              <Text style={{ fontSize: 20 }}>
                {person?.prenom[0].toUpperCase()} {person?.nom[0].toUpperCase()}
              </Text>
            </View>
            <View style={styles.personInfo}>
              <Text style={styles.name}>
                {person?.prenom} {person?.nom}
              </Text>
              <Text style={styles.email}>{person.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    // marginBottom: 10,
    backgroundColor: 'red',
  },
  memberImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
    // marginBottom: 10,
    backgroundColor: 'gray',
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

export default MyTeamScreen
