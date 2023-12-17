import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import WhatPolicy from '../screens/WhatPolicy';
import ProfileScreen from '../screens/ProfileScreen';
import ClaimsScreen from '../screens/ClaimsScreen';
import Insurance from '../screens/Insurance';


const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={WhatPolicy}/>
        <Tab.Screen name='Insurance' component={Insurance}/>
        <Tab.Screen name='Claims' component={ClaimsScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}
export default TabNavigator