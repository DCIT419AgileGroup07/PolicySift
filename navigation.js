// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import { View, Text } from 'react-native'
// import React from 'react'
// import HomeScreen from './screens/HomeScreen';
// import Onboarding from './screens/Onboarding';
// import LogIn from './screens/LogIn';
// import SignUp from './screens/SignUp';
// import WelcomeScreen from './screens/WelcomeScreen';
// import ForgetPass01 from './screens/ForgetPass01';
// import Verifypassword from './screens/Verifypassword';
// import WhatPolicy from './screens/WhatPolicy';
// import Changepassword from './screens/Changepassword';
// import Verifynumber from './screens/Verifynumber';
// import GeneralPolicy  from './screens/GeneralPolicy'
// import LifePolicy  from './screens/LifePolicy'
// import HealthPolicy  from './screens/HealthPolicy'
// import ClaimsScreen from './screens/ClaimsScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import Insurance from './screens/Insurance';

// const Stack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

// const AuthStack = () => (
//   <Stack.Navigator>// initialRouteName="WelcomeScreen" headerMode="none"
//     <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
//     <Stack.Screen name="LogIn" component={LogIn}/>
//     <Stack.Screen name="SignUp" component={SignUpScreen} />
//     <Stack.Screen name="ForgetPass01" component={ForgetPass01}/>
//     <Stack.Screen name="Verifypassword" component={Verifypassword}/>
//   </Stack.Navigator>
// );

// const HomeStack = () => (
//   <Stack.Navigator initialRouteName='WhatPolicy' screenOptions={{headerShown:false}}>
//     <Stack.Screen name="WhatPolicy" component={WhatPolicy} />
//     <Stack.Screen name="GeneralPolicy" component={GeneralPolicy}/>
//     <Stack.Screen name="HealthPolicy" component={HealthPolicy}/>
//     <Stack.Screen name="LifePolicy" component={LifePolicy}/>
//   </Stack.Navigator>
// );

// const MainTabs = () => (
//     <Tab.Navigator>
//         <Tab.Screen name='Home' component={HomeStack}/>
//         <Tab.Screen name='Insurance' component={Insurance}/>
//         <Tab.Screen name='Claims' component={ClaimsScreen}/>
//         <Tab.Screen name='Profile' component={ProfileScreen}/>
//     </Tab.Navigator>
// );

// // const TabNavigator = () => (
// //     <NavigationContainer>
// //         <Stack.Navigator>
// //             <Stack.Screen name="Changepassword" component={Changepassword}/>
// //             <Stack.Screen name="Verifynumber" component={Verifynumber}/>
// //             <Stack.Screen name="ClaimsScreen" component={ClaimsScreen}/>
// //             <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
// //             <Stack.Screen name='Insurance' component={Insurance}/>
// //         </Stack.Navigator>
// //   </NavigationContainer>
// //   )

// const AppNavigator = () => (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
//       <Stack.Screen name="HomeScreen" component={HomeScreen}/>{/*Splash Screen*/}
//       <Stack.Screen name="Onboarding" component={Onboarding} />
//       <Stack.Screen name="Auth" component={AuthStack} />
//       <Stack.Screen name="Main" component={MainTabs} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default AppNavigator;
