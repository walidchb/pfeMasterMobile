import { View, useColorScheme, Text } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import LoaderKit from 'react-native-loader-kit'

const MyLoader = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={{ backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, marginRight: 30 }}>
      <LoaderKit
        style={{ position: 'absolute', top: 0, left: 0, width: 50, height: 50 }}
        name={'BallZigZag'} // Optional: see list of animations below
        color={'blue'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
      />
      <LoaderKit
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 50,
          height: 50,
          transform: [{ rotate: '90deg' }],
        }}
        name={'BallZigZag'} // Optional: see list of animations below
        color={'green'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
      />
    </View>
  )
}

export default MyLoader
