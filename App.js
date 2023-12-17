import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Onboarding from './screens/Onboarding';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgetPass01 from './screens/ForgetPass01';
import Verifypassword from './screens/Verifypassword';
import WhatPolicy from './screens/WhatPolicy';
import ClaimsScreen from './screens/ClaimsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Insurance from './screens/Insurance';
import RootNavigator from './stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const AuthStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name='Login' component={LogIn}/>
//     <Stack.Screen name='SignUp' component={SignUp}/>
//   </Stack.Navigator>
// );


const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeScreen'>
      <Stack.Screen name='Splash' component={HomeScreen} />
      <Stack.Screen name='Onboarding' component={Onboarding}/>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
      <Stack.Screen name='LogIn' component={LogIn}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='RootNavigator' component={RootNavigator}/>
      {/* <Stack.Screen name='AuthStack' component={AuthStack}/> */}
      {/* <Tab.Navigator>
    <Tab.Screen name='WhatPolicy' component={WhatPolicy} />
    <Tab.Screen name='Claims' component={ClaimsScreen} />
    <Tab.Screen name='Profile' component={ProfileScreen} />
  </Tab.Navigator> */}
    </Stack.Navigator>
  </NavigationContainer>
  
);



export default function App() {
  return <AppNavigator />;
}