import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Onboarding from './screens/Onboarding';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import WelcomeScreen from './screens/WelcomeScreen';
import RootNavigator from './stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeScreen'>
      <Stack.Screen name='Splash' component={HomeScreen} />
      <Stack.Screen name='Onboarding' component={Onboarding}/>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
      <Stack.Screen name='LogIn' component={LogIn}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='RootNavigator' component={RootNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>
  
);



export default function App() {
  return <AppNavigator />;
}