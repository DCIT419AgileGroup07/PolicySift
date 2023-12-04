import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import Onboarding from './screens/Onboarding';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgetPass01 from './screens/ForgetPass01';
import Verifypassword from './screens/Verifypassword';
import WhatPolicy from './screens/WhatPolicy';
import Changepassword from './screens/Changepassword';
import Verifynumber from './screens/Verifynumber';

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="Onboarding" component={Onboarding}/>
            <Stack.Screen name="LogIn" component={LogIn}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="ForgetPass01" component={ForgetPass01}/>
            <Stack.Screen name="Verifypassword" component={Verifypassword}/>
            <Stack.Screen name="WhatPolicy" component={WhatPolicy}/>
            <Stack.Screen name="Changepassword" component={Changepassword}/>
            <Stack.Screen name="Verifynumber" component={Verifynumber}/>
        </Stack.Navigator>
  </NavigationContainer>
  )
}