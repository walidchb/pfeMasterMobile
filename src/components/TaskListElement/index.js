import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Screen } from 'react-native-screens'

const TaskListElement = ({ task, navigation, status }) => {
  const getImage = status => {
    switch (status) {
      case 'Todo':
        return (
          <Image
            style={{
              height: 32,
              width: 32,
              // marginTop: 10,
              marginRight: 10,
            }}
            source={require(`../../../assetes/ToDoTask.png`)}
            resizeMode="contain"
          />
        )
        break
      case 'Inprogress':
        return (
          <Image
            style={{
              height: 32,
              width: 32,
              // marginTop: 10,
              marginRight: 10,
            }}
            source={require(`../../../assetes/InProgressTask.png`)}
            resizeMode="contain"
          />
        )
        break
      case 'Inreview':
        return (
          <Image
            style={{
              height: 32,
              width: 32,
              // marginTop: 10,
              marginRight: 10,
            }}
            source={require(`../../../assetes/inReviewTask.png`)}
            resizeMode="contain"
          />
        )
        break
      case 'Done':
        return (
          <Image
            style={{
              height: 32,
              width: 32,
              // marginTop: 10,
              marginRight: 10,
            }}
            source={require(`../../../assetes/doneTask.png`)}
            resizeMode="contain"
          />
        )
        break

      default:
        break
    }
  }

  function getColor(letter) {
    // Vérifiez si letter n'est pas undefined
    if (typeof letter !== 'undefined') {
      switch (letter.toLowerCase()) {
        case 'a':
          return 'red'
        case 'b':
          return 'orange'
        case 'c':
          return 'green'
        case 'd':
          return 'pink'
        case 'e':
          return 'gray'
        default:
          return 'black'
      }
    }
    // Si letter est undefined, retournez une couleur par défaut
    return 'black'
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Task', { screen: 'TaskDescriptionScreen' })}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
        {getImage(task?.status)}
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={{ width: '100%', color: 'black', fontSize: 14 }}>
            {task?.Name}
          </Text>
          <Text style={{ color: 'black', fontSize: 14 }}> {task?.projet?.Name}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: getColor(task?.priorite),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'black', fontSize: 14, color: '#FFFFFF' }}>{task?.priorite}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default TaskListElement
