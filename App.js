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
import Account from './screens/Account';
import AboutUs from './screens/AboutUs';
import Support from './screens/Support';
import AllianzMotor from './screens/AllianzMotor';
import AllianzHomePolicy from './screens/AllianzHomePolicy';
import AllianzTravel from './screens/AllianzTravel';
import HollardGeneralMain from './screens/HollardGeneralMain';
import HollardPersonal from './screens/HollardPersonal';
import HollardHome from './screens/HollardHome';
import HollardTravel from './screens/HollardTravel';
import HollardTravelComprehensive from './screens/HollardTravelComprehensive';
import HollardTravelExecutive from './screens/HollardTravelExecutive';
import GlicoGeneralMain from './screens/GlicoGeneralMain';
import GlicoMotor from './screens/GlicoMotor';
import GlicoMarine from './screens/GlicoMarine';
import GlicoSpecialty from './screens/GlicoSpecialty';
import GlicoFire from './screens/GlicoFire';











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
      <Stack.Screen name='AllianzMotor' component={AllianzMotor}/>
      <Stack.Screen name='AllianzHomePolicy' component={AllianzHomePolicy}/>
      <Stack.Screen name='AllianzTravel' component={AllianzTravel}/>
      <Stack.Screen name='HollardGeneralMain' component={HollardGeneralMain}/>
      <Stack.Screen name='HollardPersonal' component={HollardPersonal}/>
      <Stack.Screen name='HollardHome' component={HollardHome}/>
      <Stack.Screen name='HollardTravel' component={HollardTravel}/>
      <Stack.Screen name='HollardTravelComprehensive' component={HollardTravelComprehensive}/>
      <Stack.Screen name='HollardTravelExecutive' component={HollardTravelExecutive}/>
      <Stack.Screen name='GlicoGeneralMain' component={GlicoGeneralMain}/>
      <Stack.Screen name='GlicoMotor' component={GlicoMotor}/>
      <Stack.Screen name='GlicoMarine' component={GlicoMarine}/>
      <Stack.Screen name='GlicoSpecialty' component={GlicoSpecialty}/>
      <Stack.Screen name='GlicoFire' component={GlicoFire}/>
   

      
      
     
    
      
    
      <Stack.Screen name='Account' component={Account}/>
      <Stack.Screen name='AboutUs' component={AboutUs}/>
      <Stack.Screen name='Support' component={Support}/>
    </Stack.Navigator>
  </NavigationContainer>
  
);



export default function App() {
  return <AppNavigator />;
}