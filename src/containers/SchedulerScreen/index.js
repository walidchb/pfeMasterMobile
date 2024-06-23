import { View, ScrollView, FlatList, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyHeader from '../../components/MyHeader'
import TaskListElement from '../../components/TaskListElement'
import { Calendar, LocaleConfig } from 'react-native-calendars'
// import { ScrollView } from 'react-native-gesture-handler'
import { Agenda } from 'react-native-calendars'
const SchedulerScreen = ({ navigation }) => {
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

  const events = {
    '2024-04-21': { startingDay: true, color: 'green' },
    '2024-04-22': { color: 'green' },
    '2024-04-23': { color: 'green', endingDay: true },
  }
  const [dayClicked, setDayClicked] = useState('')
  useEffect(() => {
    // Function to get today's date
    const getTodayDate = () => {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${
        day < 10 ? '0' + day : day
      }`
      return formattedDate
    }

    // Set today's date to state
    setDayClicked(getTodayDate())
  }, [])
  return (
    <View>
      <MyHeader navigation={navigation} backPath={null} />

      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        <Calendar
          markingType={'period'}
          markedDates={events}
          onDayPress={day => {
            setDayClicked(day.dateString)
            console.log('selected day', day)
          }}
          theme={{
            agendaDayTextColor: 'red', // Customize agenda day text color
            agendaKnobColor: '#333', // Customize agenda knob color
          }}
          style={styles.calendar}
        />
      </ScrollView>

      <Text style={{ padding: 20, fontSize: 20, color: 'black' }}>
        Your Work on : <Text style={{ color: 'blue' }}>( {dayClicked} )</Text>
      </Text>
      <FlatList
        style={{ height: '40%', paddingHorizontal: 10 }}
        data={tasks}
        renderItem={item => {
          return <TaskListElement task={item.item} navigation={navigation} status={'Progress'} />
        }}
        keyExtractor={item => item} // Use unique identifier for each item
      />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    width: '120%', // Set width to 120% of the viewport
    alignItems: 'center', // Center the content horizontally
  },
  calendar: {
    width: 600,
    // height: '90%', // Ensure Calendar takes full width of ScrollView
  },
})
export default SchedulerScreen
