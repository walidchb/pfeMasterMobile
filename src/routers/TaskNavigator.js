import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TaskDescriptionScreen from '../containers/TaskDescriptionScreen'
import TaskDetailsScreen from '../containers/TaskDetailsScreen'

const Tab = createMaterialTopTabNavigator()

const TaskNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Description" component={TaskDescriptionScreen} />
      <Tab.Screen name="Details" component={TaskDetailsScreen} />
    </Tab.Navigator>
  )
}

export default TaskNavigator
