import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const NotificationListElement = ({ notification }) => {
  const renderIcon = () => {
    switch (notification.type) {
      case 'message':
        return <MaterialCommunityIcons name="email" size={24} color="black" />
      case 'event':
        return <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
      case 'reminder':
        return <MaterialCommunityIcons name="bell" size={24} color="black" />
      case 'project':
        return <MaterialCommunityIcons name="clipboard-outline" size={24} color="black" />
      case 'task':
        return <MaterialCommunityIcons name="clipboard-check" size={24} color="black" />
      case 'team':
        return <MaterialCommunityIcons name="account-group" size={24} color="black" />
      case 'report':
        return <MaterialCommunityIcons name="chart-bar" size={24} color="black" />
      default:
        return null
    }
  }

  return (
    <View key={notification.id} style={styles.container}>
      <View style={styles.content}>
        {renderIcon()}
        <View style={styles.details}>
          <Text style={styles.date}>{new Date(notification.date).toLocaleString()}</Text>
          <Text style={notification.isRead ? styles.contentRead : styles.contentUnread}>
            {notification.content}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  details: {
    marginLeft: 16,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  contentRead: {
    fontSize: 14,
    color: '#333',
  },
  contentUnread: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  deleteButton: {
    padding: 8,
  },
  deleteConfirmation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  confirmationText: {
    color: 'white',
    fontSize: 16,
  },
})

export default NotificationListElement
