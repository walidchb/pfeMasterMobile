// import React, { useState } from 'react'
import MyHeader from '../../components/MyHeader'

// import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native'
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  FlatList,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native'
import TaskListElement from '../../components/TaskListElement'
import TaskCard from '../../components/TaskCard'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { scaleFont, scaleSize, theme } from '../../styles'

const Status = [
  {
    id: 1,

    title: 'To DO',
    icon: (
      <Image style={{ width: 30, height: 30 }} source={require('../../../assetes/ToDoTask.png')} />
    ),
    gradientColors: ['blue', 'green'],
  },
  {
    id: 2,

    title: 'In Progress',
    icon: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assetes/InProgressTask.png')}
      />
    ),
    gradientColors: ['orange', 'purple'],
  },
  {
    id: 3,

    title: 'In Review',
    icon: (
      <Image
        style={{ width: 30, height: 30 }}
        source={require('../../../assetes/inReviewTask.png')}
      />
    ),
    gradientColors: ['black', 'green'],
  },
  {
    id: 4,

    title: 'Done',
    icon: (
      <Image style={{ width: 30, height: 30 }} source={require('../../../assetes/doneTask.png')} />
    ),
    gradientColors: ['yellow', 'blue'],
  },
]
const ProjectKanban = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Tâche 1',
      startDate: '2023-03-01',
      endDate: '2023-03-15',
      priority: 'A',
      team: {
        name: 'Equipe A',
        membres: [
          { name: 'John Doe', role: 'Développeur' },
          { name: 'Jane Smith', role: 'Designer' },
          { name: 'Bob Johnson', role: 'Chef de projet' },
        ],
      },
      project: 'Projet ABC',
      description: 'Ceci est la description de la tâche 1.',
      status: 'todo',
      comments: [
        {
          author: 'John Doe',
          date: '2023-05-01 10:30',
          text: 'Premier commentaire',
        },
        {
          author: 'Jane Smith',
          date: '2023-05-02 14:45',
          text: 'Deuxième commentaire',
        },
      ],
    },
    {
      id: 2,
      title: 'Tâche 2',
      startDate: '2023-03-05',
      endDate: '2023-03-20',
      priority: 'C',
      team: {
        name: 'Equipe B',
        membres: [
          { name: 'John Doe', role: 'Développeur' },
          { name: 'Jane Smith', role: 'Designer' },
          { name: 'Bob Johnson', role: 'Chef de projet' },
        ],
      },
      project: 'Projet ABC',
      description: 'Ceci est la description de la tâche 2.',
      status: 'todo',
      comments: [
        {
          author: 'John Doe',
          date: '2023-05-01 10:30',
          text: 'Premier commentaire',
        },
        {
          author: 'Jane Smith',
          date: '2023-05-02 14:45',
          text: 'Deuxième commentaire',
        },
      ],
    },
    {
      id: 3,
      title: 'Tâche 3',
      startDate: '2023-03-10',
      endDate: '2023-03-25',
      priority: 'B',
      team: {
        name: 'Equipe C',
        membres: [
          { name: 'John Doe', role: 'Développeur' },
          { name: 'Jane Smith', role: 'Designer' },
          { name: 'Bob Johnson', role: 'Chef de projet' },
        ],
      },
      project: 'Projet ABC',
      description: 'Ceci est la description de la tâche 3.',
      status: 'doing',
      comments: [
        {
          author: 'John Doe',
          date: '2023-05-01 10:30',
          text: 'Premier commentaire',
        },
        {
          author: 'Jane Smith',
          date: '2023-05-02 14:45',
          text: 'Deuxième commentaire',
        },
      ],
    },
    {
      id: 4,
      title: 'Tâche 4',
      startDate: '2023-03-15',
      endDate: '2023-03-30',
      priority: 'D',
      team: {
        name: 'Equipe A',
        membres: [
          { name: 'John Doe', role: 'Développeur' },
          { name: 'Jane Smith', role: 'Designer' },
          { name: 'Bob Johnson', role: 'Chef de projet' },
        ],
      },
      project: 'Projet ABC',
      description: 'Ceci est la description de la tâche 4.',
      status: 'done',
      comments: [
        {
          author: 'John Doe',
          date: '2023-05-01 10:30',
          text: 'Premier commentaire',
        },
        {
          author: 'Jane Smith',
          date: '2023-05-02 14:45',
          text: 'Deuxième commentaire',
        },
      ],
    },
    {
      id: 5,
      title: 'Tâche 5',
      startDate: '2023-03-20',
      endDate: '2023-04-05',
      priority: 'A',
      team: {
        name: 'Equipe A',
        membres: [
          { name: 'John Doe', role: 'Développeur' },
          { name: 'Jane Smith', role: 'Designer' },
          { name: 'Bob Johnson', role: 'Chef de projet' },
        ],
      },
      project: 'Projet ABC',
      description: 'Ceci est la description de la tâche 5.',
      status: 'done',
      comments: [
        {
          author: 'John Doe',
          date: '2023-05-01 10:30',
          text: 'Premier commentaire',
        },
        {
          author: 'Jane Smith',
          date: '2023-05-02 14:45',
          text: 'Deuxième commentaire',
        },
      ],
    },
    {
      id: 6,
      title: 'Tâche 6',
      startDate: '2023-03-25',
      endDate: '2023-04-10',
      priority: 'C',
      team: {
        name: 'Equipe A',
        membres: [
          { name: 'John Doe', role: 'Développeur' },
          { name: 'Jane Smith', role: 'Designer' },
          { name: 'Bob Johnson', role: 'Chef de projet' },
        ],
      },
      project: 'Projet ABC',
      description: 'Ceci est la description de la tâche 6.',
      status: 'doing',
      comments: [
        {
          author: 'John Doe',
          date: '2023-05-01 10:30',
          text: 'Premier commentaire',
        },
        {
          author: 'Jane Smith',
          date: '2023-05-02 14:45',
          text: 'Deuxième commentaire',
        },
      ],
    },
  ])
  const [onboardingCurrentIndex, setOnboardingCurrentIndex] = useState(0)

  const flatListRef = useRef()

  const handeScrollFlatList = useCallback(({ nativeEvent }) => {
    const index = nativeEvent.contentOffset.x / theme.sizes.screenWidth
    const roundIndex = Math.round(index)
    const distance = Math.abs(roundIndex - index)
    if (distance < 0.4) {
      setOnboardingCurrentIndex(roundIndex)
    }
  }, [])
  const projects = [1, 2, 4, 5, 6, 7, 8, 9]

  const renderOnboardingItem = ({ item }) => {
    return (
      <View style={styles.onboardingItem}>
        {/** Animated header */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={item.gradientColors}
          style={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 2,
            paddingVertical: 10,
            // backgroundColor: 'gray',
            flexDirection: 'row',
            minWidth: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {item.icon}
          <Text style={{ marginLeft: 10, color: 'white', fontSize: 20, fontWeight: '500' }}>
            {item.title}
          </Text>
        </LinearGradient>

        <View
          style={{
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            minHeight: '85%',
            maxHeight: '90%',
            padding: 10,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 2,
            minWidth: '90%',
            marginBottom: scaleSize(12),
          }}
        >
          <FlatList
            data={tasks}
            showsHorizontalScrollIndicator={false}
            // horizontal={true} // Set horizontal scrolling
            renderItem={(elm, index) => {
              return <TaskCard navigation={navigation} task={elm} />
            }}
            keyExtractor={(elm, index) => index} // Use unique identifier for each item
          />
        </View>
      </View>
    )
  }
  return (
    <View>
      <MyHeader navigation={navigation} hideOrganization={true} />

      <View style={styles.onboarding}>
        <FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={Status}
          renderItem={renderOnboardingItem}
          keyExtractor={item => item.id}
          scrollEventThrottle={16}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 20,
          }}
          onScroll={handeScrollFlatList}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: scaleSize(24),
            paddingHorizontal: scaleSize(24),
          }}
        >
          <View style={[styles.onboardingDots]}>
            {Status.map((_, index) => {
              const displayIndex = I18nManager.isRTL ? Status.length - 1 - index : index
              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.onboardingDot,
                    displayIndex === onboardingCurrentIndex && styles.onboardingDotActive,
                  ]}
                />
              )
            })}
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProjectKanban
