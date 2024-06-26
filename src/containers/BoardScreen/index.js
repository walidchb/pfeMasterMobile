import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import MyHeader from '../../components/MyHeader'
import RNPickerSelect from 'react-native-picker-select'
import React, { useState, useEffect } from 'react'
import TaskListElement from '../../components/TaskListElement'
import ProjectCard from '../../components/ProjectCard'

const BoardScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({})
  const [organization, setOrganization] = useState({})
  const [teamId, setTeamId] = useState(null)
  const [reload, setReload] = useState(false) // State to trigger rerend
  const [projects, setProjects] = useState([])

  const [allTasks, setAllTasks] = useState([])
  const [Tasks, setTasks] = useState([])

  const [todoTasks, setTodoTasks] = useState([])
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [inReviewTasks, setInReviewTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])

  const [filter, setFilter] = useState('all')

  const handlefilter = () => {
    switch (filter) {
      case 'Todo':
        setTasks(todoTasks)
        break

      case 'Inprogress':
        setTasks(inProgressTasks)
        break

      case 'Inreview':
        setTasks(inReviewTasks)
        break

      case 'Done':
        setTasks(doneTasks)
        break

      default:
        setTasks(allTasks)
        break
    }
  }

  useEffect(() => {
    handlefilter()
  }, [filter])

  const filterTasks = tasks => {
    setTodoTasks(tasks.filter(task => task.status === 'Todo'))
    setInProgressTasks(tasks.filter(task => task.status === 'Inprogress'))
    setInReviewTasks(tasks.filter(task => task.status === 'Inreview'))
    setDoneTasks(tasks.filter(task => task.status === 'Done'))
  }
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
  const fetchProjectsAndTasks = async (organizationId, userId) => {
    const axiosInstance = axios.create({
      baseURL: 'https://back-pfe-master.vercel.app',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (userInfo?.role === 'teamBoss') {
      try {
        const response = await axiosInstance.get(`/user/userProjects`, {
          params: { userId: userId, organizationId: organization?._id },
        })
        console.log('responseData = ', response.data)
        setProjects(response.data)

        const tasksResponse = await axiosInstance.get('/task/tasks', {
          params: { team: teamId },
        })
        const tasks = tasksResponse.data
        setTasks(tasks)

        setAllTasks(tasks)
        filterTasks(tasks)
      } catch (error) {
        console.error('Erreur lors de la récupération des équipes :', error)
      }
    } else if (userInfo?.role === 'employee') {
      try {
        const response = await axiosInstance.get(`/user/userProjects`, {
          params: { userId: userInfo?._id, organizationId: organization?._id },
        })
        console.log('responseData = ', response.data)
        setProjects(response.data)

        const tasksResponse = await axiosInstance.get(`/user/userTasks`, {
          params: {
            userId: userId,
            teamId: teamId,
          },
        })
        const tasks = tasksResponse.data
        setTasks(tasks)
        setAllTasks(tasks)
        filterTasks(tasks)
      } catch (error) {
        console.error('Erreur lors de la récupération des équipes :', error)
      }
    }
  }

  useEffect(() => {
    console.log('fetcheingg')
    console.log(userInfo)
    console.log(organization)

    if (userInfo?._id && organization?._id && teamId) {
      console.log('ldakhel')
      fetchProjectsAndTasks(organization._id, userInfo._id)
    }
  }, [organization, userInfo, teamId, reload])
  // const projects = [
  //   { name: 'project one', boss: 'user one' },
  //   { name: 'project two', boss: 'chef two' },
  //   { name: 'project one', boss: 'user one' },
  //   { name: 'project one', boss: 'user one' },
  //   { name: 'project one', boss: 'user one' },
  //   { name: 'project one', boss: 'user one' },
  //   { name: 'project one', boss: 'user one' },
  //   9,
  // ]
  // const tasks = [
  //   {
  //     task: 'Implement new authentication flow',
  //     project: 'Project Phoenix',
  //   },
  //   {
  //     task: 'Design landing page UI',
  //     project: 'Project Zeus',
  //   },
  //   {
  //     task: 'Fix memory leak issue',
  //     project: 'Project Ares',
  //   },
  //   {
  //     task: 'Optimize database queries',
  //     project: 'Project Athena',
  //   },
  //   {
  //     task: 'Conduct user research interviews',
  //     project: 'Project Hermes',
  //   },
  //   {
  //     task: 'Setup CI/CD pipeline',
  //     project: 'Project Hera',
  //   },
  //   {
  //     task: 'Write unit tests for new features',
  //     project: 'Project Apollo',
  //   },
  //   {
  //     task: 'Implement caching for API responses',
  //     project: 'Project Hades',
  //   },
  // ]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <MyHeader navigation={navigation} backPath={null} />
      <View
        style={{
          marginTop: 20,
          width: '100%',
          paddingHorizontal: 20,
          flexDirection: 'row',
          marginBottom: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'black', fontSize: 20 }}>Your Projects ({projects?.length}):</Text>
        {/* <Text style={{ color: '#007BFF', fontSize: 18, textDecorationLine: 'underline' }}>
          See all projects
        </Text> */}
        {/* <Button title="See all projects" color="#007bff" /> */}
      </View>
      <View>
        <FlatList
          style={{ paddingHorizontal: 10 }}
          data={projects}
          showsHorizontalScrollIndicator={false}
          horizontal={true} // Set horizontal scrolling
          renderItem={item => {
            // console.log('object')
            // console.log(item)
            let textColor = 'black' // Set your desired text color
            return (
              // <Text>walsdk</Text>
              <ProjectCard
                key={item.index}
                project={item?.item}
                navigation={navigation}
                status={'Done'}
              />
            )
          }}
          // keyExtractor={item => item.index} // Use unique identifier for each item
        />
      </View>
      <View
        style={{
          backgroundColor: 'red',
          marginVertical: 10,
          marginLeft: 20,
          borderRadius: 10,
          overflow: 'hidden',
          width: '60%',
        }}
      >
        <RNPickerSelect
          onValueChange={value => setFilter(value)}
          items={[
            { label: 'ALL', value: 'All' },
            { label: 'TO DO', value: 'Todo' },
            { label: 'IN PROGRESS', value: 'Inprogress' },
            { label: 'IN REVIEW', value: 'Inreview' },
            { label: 'DONE', value: 'Done' },
          ]}
          style={{
            inputIOS: {
              backgroundColor: '#ccc', // Gray background
              color: 'black', // Black text
              paddingHorizontal: 10, // Adjust as needed
              paddingVertical: 8, // Adjust as needed
            },
            inputAndroid: {
              // marginLeft: 20,
              backgroundColor: '#ccc', // Gray background
              color: 'black', // Black text
              paddingHorizontal: 10, // Adjust as needed
              // paddingVertical: 8, // Adjust as needed
              // borderRadius: 10, // Border radius
              // width: '60%',
            },
            placeholder: {
              color: 'black',
            },
          }}
        />
      </View>
      <FlatList
        style={{ paddingHorizontal: 10 }}
        data={Tasks}
        showsHorizontalScrollIndicator={false}
        // horizontal={true} // Set horizontal scrolling
        renderItem={item => {
          let textColor = 'black' // Set your desired text color
          return (
            <TaskListElement
              key={item.index}
              task={item.item}
              navigation={navigation}
              status={'Progress'}
            />
            // <View style={{ backgroundColor: 'red' }}>
            //   <Text style={{ fontWeight: 'bold', color: '#000000' }}>Project Name</Text>
            //   <Text style={{ fontSize: 14, color: '#000000' }}>Project Boss Name</Text>
            // </View>
          )
        }}
        // keyExtractor={item => item.index} // Use unique identifier for each item
      />
    </SafeAreaView>
  )
}

export default BoardScreen
