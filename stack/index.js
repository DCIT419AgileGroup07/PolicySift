import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import WhatPolicy from '../screens/WhatPolicy';
import GeneralPolicy  from '../screens/GeneralPolicy'
import LifePolicy  from '../screens/LifePolicy'
import HealthPolicy  from '../screens/HealthPolicy'
import ClaimsScreen from '../screens/ClaimsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Insurance from '../screens/Insurance';


const Tab =  createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    
    return(
        <Stack.Navigator screenOptions={{headerShown:false }}>
            <Stack.Screen name='HomeStack' component={HomeStackNavigator}/>
            {/* <Stack.Screen name='ClaimsStack' component={ClaimsStackNavigator}/>
            <Stack.Screen name='InsuranceStack' component={InsuranceStackNavigator}/> */}
            <Stack.Screen name='ProfileStack' component={ProfileStackNavigator}/>
        </Stack.Navigator>
    )
}

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>

        <Tab.Screen name='Home' component={WhatPolicy} options={{gestureDirection: false, gestureEnabled: false ,tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />)}} />

        {/* <Tab.Screen name='Insurance' component={InsuranceStackNavigator} options={{ tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="shield" color={color} size={26} />)}}/>
        
        <Tab.Screen name='Claims' component={ClaimsStackNavigator} options={{ tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="hand-coin" color={color} size={26} />)}}/> */}
        
        <Tab.Screen name='Profile' component={ProfileStackNavigator} options={{ tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />)}}/>
        
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen name='HomeTabs' component={HomeTabs}/>
            <HomeStack.Screen name='GeneralPolicy' component={GeneralPolicy}/>
            <HomeStack.Screen name='LifePolicy' component={LifePolicy}/>
            <HomeStack.Screen name='HealthPolicy' component={HealthPolicy}/>
        </HomeStack.Navigator>
    )
}

const ClaimsStack = createNativeStackNavigator();

const ClaimsStackNavigator = () =>{
    return(
        <ClaimsStack.Navigator screenOptions={{headerShown:false}}>
            <ClaimsStack.Screen name='ClaimsScreen' component={ClaimsScreen}/>
        </ClaimsStack.Navigator>
    )
}

const InsuranceStack = createNativeStackNavigator();

const InsuranceStackNavigator = () =>{
    return(
        <InsuranceStack.Navigator screenOptions={{headerShown:false}}>
            <InsuranceStack.Screen name='InsuranceScreen' component={Insurance}/>
        </InsuranceStack.Navigator>
    )
}

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () =>{
    return(
        <ProfileStack.Navigator screenOptions={{headerShown:false}}>
            <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen}/>
        </ProfileStack.Navigator>
    )
}


export default RootNavigator;