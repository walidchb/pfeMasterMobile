import React, { Fragment, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import { FontAwesome5 as Icon, FontAwesome5IconStyle } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TaskCard = ({ navigation, task }) => {
  // console.log(task.item.priority)
  const [showMore, setShowMore] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  function getColor(letter) {
    switch (letter.toLowerCase()) {
      case 'a':
        return 'red'
      case 'b':
        return 'blue'
      case 'c':
        return 'green'
      case 'd':
        return 'orange'
      case 'e':
        return 'purple'
      default:
        return 'black' // default color if the input is not one of the specified letters
    }
  }

  return (
    <View style={[styles.cardContainer, isDragging ? styles.dragging : null]}>
      <View style={styles.header}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {task.item.title}
        </Text>
        <View style={[styles.priority, { backgroundColor: getColor(task.item.priority) }]}>
          <Text style={styles.priorityText}>{task.item.priority}</Text>
        </View>
      </View>
      {showMore && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Icon name="calendar-alt" style={styles.icon} />
            <Text style={styles.detailText}>Début: {task.item.startDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="calendar-alt" style={styles.icon} />
            <Text style={styles.detailText}>Fin: {task.item.endDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="clipboard-list" style={styles.icon} />
            <Text style={styles.detailText}>Projet: {task.item.project}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="user-friends" style={styles.icon} />
            <Text style={styles.detailText}>Équipe: {task.item.team.name}</Text>
          </View>
        </View>
      )}
      <TouchableOpacity style={styles.toggleButton} onPress={() => setShowMore(!showMore)}>
        <Text style={styles.toggleButtonText}>
          {showMore ? 'Masquer les détails' : 'Afficher les détails'}
        </Text>
        <Icon name={showMore ? 'chevron-up' : 'chevron-down'} style={styles.toggleButtonIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Task', { screen: 'TaskDescriptionScreen' })}
        style={styles.viewButton}
      >
        <Text style={styles.viewButtonText}>Voir</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  dragging: {
    // styles for dragging state
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    width: '80%',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  priority: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  priorityText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    marginRight: 8,
    fontSize: 18,
    color: '#888888',
  },
  detailText: {
    fontSize: 16,
    color: '#888888',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  toggleButtonText: {
    color: '#314155',
    marginRight: 4,
  },
  toggleButtonIcon: {
    color: '#314155',
    fontSize: 18,
  },
  viewButton: {
    backgroundColor: '#314155',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  viewButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
})

export default TaskCard
