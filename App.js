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
import Changepassword from './screens/Changepassword'
import Verifynumber from './screens/Verifynumber';
import Verifypassword from './screens/Verifypassword';
import ForgetPass01 from './screens/ForgetPass01';
import StarLifeGeneralMain from './screens/StarLifeGeneralMain';
import StarMotor from './screens/StarMotor';
import StarComprehensive from './screens/StarComprehensive';
import StarAccidentPolicy from './screens/StarAccidentPolicy';
import StarPersonalGuide from './screens/StarPersonalGuide';
import StarInternationalTravels from './screens/StarInternationalTravels';
import AllianzGeneralMain from './screens/AllianzGeneralMain';


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
      <Stack.Screen name='Changepassword' component={Changepassword}/>
      <Stack.Screen name='Verifypassword' component={Verifypassword}/>
      <Stack.Screen name='ForgetPass01'component={ForgetPass01}/>
      <Stack.Screen name='Verifynumber' component={Verifynumber}/>
      <Stack.Screen name='StarLifeGeneralMain' component={StarLifeGeneralMain}/>
      <Stack.Screen name='StarMotor' component={StarMotor}/>
      <Stack.Screen name='StarComprehensive' component={StarComprehensive}/>
      <Stack.Screen name='StarAccidentPolicy' component={StarAccidentPolicy}/>
      <Stack.Screen name='StarPersonalGuide' component={StarPersonalGuide}/>
      <Stack.Screen name='StarInternationalTravels' component={StarInternationalTravels}/>
      <Stack.Screen name='AllianzGeneralMain' component={AllianzGeneralMain}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  
);



export default function App() {
  return <AppNavigator />;
}