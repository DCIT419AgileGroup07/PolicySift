import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import Onboarding from '../screens/Onboarding';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import WelcomeScreen from '../screens/WelcomeScreen';
import ForgetPass01 from '../screens/ForgetPass01';
import Verifypassword from '../screens/Verifypassword';
import WhatPolicy from '../screens/WhatPolicy';
import Changepassword from '../screens/Changepassword';
import Verifynumber from '../screens/Verifynumber';
import GeneralPolicy  from '../screens/GeneralPolicy'
import LifePolicy  from '../screens/LifePolicy'
import HealthPolicy  from '../screens/HealthPolicy'
import ClaimsScreen from '../screens/ClaimsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Insurance from '../screens/Insurance';

const Tab =  createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const navigation = useNavigation();
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeStack' component={HomeStackNavigator}/>
        </Stack.Navigator>
    )
}

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={WhatPolicy}/>
        <Tab.Screen name='Insurance' component={InsuranceStackNavigator}/>
        <Tab.Screen name='Claims' component={ClaimsStackNavigator}/>
        <Tab.Screen name='Profile' component={ProfileStackNavigator}/>
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