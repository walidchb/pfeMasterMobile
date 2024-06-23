import React, { useState } from 'react'
import MyHeader from '../../components/MyHeader'
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Checkbox } from 'react-native-paper'
import RNPickerSelect from 'react-native-picker-select'
import TaskListElement from '../../components/TaskListElement'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Formik } from 'formik'
import ProjectCard from '../../components/ProjectCard'
import { theme } from '../../styles'

const ProjectBoard = ({ navigation }) => {
  const projects = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const iconStatus = status => {
    let size = 20
    if (status === 'todo') {
      return (
        <Image
          source={require(`../../../assetes/ToDoTask.png`)}
          style={{ width: size, height: size }}
        />
      )
    } else if (status === 'inProgress') {
      return (
        <Image
          source={require(`../../../assetes/InProgressTask.png`)}
          style={{ width: size, height: size }}
        />
      )
    } else if (status === 'inReview') {
      return (
        <Image
          source={require(`../../../assetes/inReviewTask.png`)}
          style={{ width: size, height: size }}
        />
      )
    } else if (status === 'done') {
      return (
        <Image
          source={require(`../../../assetes/doneTask.png`)}
          style={{ width: size, height: size }}
        />
      )
    }
  }
  const [status, setStatus] = useState([
    { name: 'todo', number: false },
    { name: 'inProgress', number: true },
    { name: 'inReview', number: true },
    { name: 'done', number: false },
  ])
  const tasks = [
    {
      task: 'Implement new authentication flow',
      project: 'Project Phoenix',
    },
    {
      task: 'Design landing page UI',
      project: 'Project Zeus',
    },
    {
      task: 'Fix memory leak issue',
      project: 'Project Ares',
    },
    {
      task: 'Optimize database queries',
      project: 'Project Athena',
    },
    {
      task: 'Conduct user research interviews',
      project: 'Project Hermes',
    },
    {
      task: 'Setup CI/CD pipeline',
      project: 'Project Hera',
    },
    {
      task: 'Write unit tests for new features',
      project: 'Project Apollo',
    },
    {
      task: 'Implement caching for API responses',
      project: 'Project Hades',
    },
  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <MyHeader navigation={navigation} hideOrganization={true} />
      <View
        style={{
          marginTop: 6,
          paddingHorizontal: 4,
          paddingVertical: 2,
          height: 100,
          marginBottom: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: '#ccc',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Formik
          initialValues={{ taskName: '' }}
          validate={values => {
            const errors = {}
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <View
              style={{
                flex: 1,
                marginBottom: 2,
                marginTop: 2,
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  paddingHorizontal: 2,
                  borderRadius: 20,
                  height: 40,
                  paddingRight: 5,
                }}
              >
                <TextInput
                  style={{ flex: 1, paddingLeft: 10 }}
                  placeholder="Search"
                  onChangeText={handleChange('taskName')}
                  onBlur={handleBlur('taskName')}
                  value={values.taskName}
                />
                <Ionicons name="search-circle" size={35} color={theme.colors.primary} />
                {/* <Button title="Search" onPress={handleSubmit} disabled={isSubmitting} /> */}
              </View>
            </View>
          )}
        </Formik>
        <View style={{ flexDirection: 'row' }}>
          {status.map((item, index) => (
            <View
              key={index}
              style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
              <Checkbox
                id="checked-checkbox"
                style={{ marginHorizontal: 2, width: 20, height: 20 }}
              />
              {iconStatus(item.name)}
            </View>
          ))}
        </View>
      </View>
      <FlatList
        style={{ flex: 1, paddingHorizontal: 10 }}
        data={tasks}
        showsHorizontalScrollIndicator={false}
        // horizontal={true} // Set horizontal scrolling
        renderItem={item => {
          let textColor = 'black' // Set your desired text color
          return (
            <TaskListElement task={item.item} navigation={navigation} status={'Progress'} />
            // <View style={{ backgroundColor: 'red' }}>
            //   <Text style={{ fontWeight: 'bold', color: '#000000' }}>Project Name</Text>
            //   <Text style={{ fontSize: 14, color: '#000000' }}>Project Boss Name</Text>
            // </View>
          )
        }}
        keyExtractor={item => item} // Use unique identifier for each item
      />
    </SafeAreaView>
  )
}

export default ProjectBoard
