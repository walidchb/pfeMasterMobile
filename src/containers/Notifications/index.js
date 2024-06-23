import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import NotificationListElement from '../../components/NotificationListElement'

const NotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      date: new Date('2021-12-25T10:30:00'),
      content:
        'Congratulations on having the most tasks completed at the end of the year! @you #tasks #management',
      type: 'project',
      isRead: false,
    },
    {
      id: 2,
      date: new Date('2021-12-20T14:00:00'),
      content: 'Meeting Agenda for Monday',
      type: 'task',
      isRead: true,
    },
    {
      id: 3,
      date: new Date('2021-12-19T09:15:00'),
      content: 'Weekly update from project team',
      type: 'reminder',
      isRead: false,
    },
    {
      id: 4,
      date: new Date('2021-12-25T10:30:00'),
      content:
        'Congratulations on having the most tasks completed at the end of the year! @you #tasks #management',
      type: 'message',
      isRead: false,
    },
    {
      id: 5,
      date: new Date('2021-12-25T10:30:00'),
      content:
        'Congratulations on having the most tasks completed at the end of the year! @you #tasks #management',
      type: 'project',
      isRead: false,
    },
    {
      id: 6,
      date: new Date('2021-12-20T14:00:00'),
      content: 'Meeting Agenda for Monday',
      type: 'task',
      isRead: true,
    },
    {
      id: 7,
      date: new Date('2021-12-19T09:15:00'),
      content: 'Weekly update from project team',
      type: 'reminder',
      isRead: false,
    },
    {
      id: 8,
      date: new Date('2021-12-25T10:30:00'),
      content:
        'Congratulations on having the most tasks completed at the end of the year! @you #tasks #management',
      type: 'message',
      isRead: false,
    },
    {
      id: 9,
      date: new Date('2021-12-20T14:00:00'),
      content: 'Meeting Agenda for Monday',
      type: 'event',
      isRead: true,
    },
    {
      id: 10,
      date: new Date('2021-12-19T09:15:00'),
      content: 'Weekly update from project team',
      type: 'team',
      isRead: false,
    },
    {
      id: 11,
      date: new Date('2021-12-19T09:15:00'),
      content: 'Weekly update from project team',
      type: 'report',
      isRead: false,
    },
  ]

  const renderItem = ({ item }) => (
    <NotificationListElement key={item.id} notification={item} /> // Pass notification data to the element
  )
  return (
    <View>
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id} // Use unique identifier for each item
        />
      ) : (
        <Text style={styles.emptyText}>Your notifications list is empty.</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow the list to fill the available space
  },
  emptyText: {
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
})
export default NotificationsScreen
