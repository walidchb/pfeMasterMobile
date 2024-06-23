import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProjectCard = ({ project, status, navigation }) => {
  const getImage = status => {
    switch (status) {
      case 'toDo':
        return (
          <Image
            style={{
              height: 32,
              width: 32,
              // marginTop: 10,
              marginRight: 10,
            }}
            source={require(`../../../assetes/toDoProject.png`)}
            resizeMode="contain"
          />
        )
        break
      case 'Progress':
        return (
          <Image
            style={{
              height: 32,
              width: 32,
              // marginTop: 10,
              marginRight: 10,
            }}
            source={require(`../../../assetes/progressProject.png`)}
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
            source={require(`../../../assetes/doneProject.png`)}
            resizeMode="contain"
          />
        )
        break
      case 'Canceled':
        return (
          <Image
            style={{
              height: 32,
              width: 32,
              // marginTop: 10,
              marginRight: 10,
            }}
            source={require(`../../../assetes/cancelledProject.png`)}
            resizeMode="contain"
          />
        )
        break

      default:
        break
    }
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Project', { screen: 'ProjectBoard' })} // Uncomment this line if using navigation
      style={{
        height: 120,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        elevation: 4, // for shadow
      }}
    >
      <View
        style={{
          // backgroundColor: 'yellow',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {getImage(status)}
        <View>
          <Text style={{ fontWeight: 'bold', color: '#000000' }}>{project?.Name}</Text>
          <Text style={{ fontSize: 14, color: '#000000' }}>
            {project?.boss?.nom} {project?.boss?.prenom}
          </Text>
        </View>
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={{ borderBottomWidth: 2, width: '80%' }} />
        <TouchableOpacity
          onPress={() => navigation.navigate('Project', { screen: 'ProjectBoard' })} // Uncomment this line if using navigation
          style={{ marginTop: 5 }}
        >
          <Text style={{ color: '#007BFF', textDecorationLine: 'underline' }}>Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProjectCard
