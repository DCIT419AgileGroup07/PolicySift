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
import TandC from './screens/TandC';
import GlicoLifeMain from './screens/GlicoLifeMain';
import GlicoLifeSaving from './screens/GlicoLifeSaving';
import GlicoFuneral from './screens/GlicoFuneral';
import GlicoEducation from './screens/GlicoEducation';
import GlicoEndService from './screens/GlicoEndService';
import GlicoFamilyLife from './screens/GlicoFamilyLife';
import StarLifeLifeMain from './screens/StarLifeLifeMain';
import StarLifeInsurance from './screens/StarLifeInsurance';
import HollardLifeMain from './screens/HollardLifeMain';
import HollardPurpleEmployee from './screens/HollardPurpleEmployee';
import HollardAdepaFamily from './screens/HollardAdepaFamily';
import AllianzLifeMain from './screens/AllianzLifeMain';
import AllianzEduflex from './screens/AllianzEduflex';
import AllianzFarewell from './screens/AllianzFarewell';
import AllianzTerm from './screens/AllianzTerm';
import AllianzWealth from './screens/AllianzWealth';
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
import StarLifeHealthMain from './screens/StarLifeHealthMain';
import StarWomenCare from './screens/StarWomenCare';
import StarHealthComprehensive from './screens/StarHealthComprehensive';
import StarHealthPremier from './screens/StarHealthPremier';
import StarOutPatient from './screens/StarOutPatient';
import StarSurplusInsurance from './screens/StarSurplusInsurance';


import AllianzHealthMain from './screens/AllianzHealthMain';
import FamilyLovePlan from './screens/FamilyLovePlan';
import AssuredInvestmentHealth from './screens/AssuredInvestmentHealth';
import AssuredChildEducation from './screens/AssuredChildEducation';
import AllianzBancassurance from './screens/AllianzBancassurance';
import HollardHealthMain from './screens/HollardHealthMain';
import HealthInsurancePlan from './screens/HealthInsurancePlan';
import HealthEssentialPlan from './screens/HealthEssentialPlan';
import SampleHealthInsurance from './screens/SampleHealthInsurance';












import GlicoHealthMain from './screens/GlicoHealthMain'
import StarLifeEmployeeSec from './screens/StarLifeEmployeeSec'

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
      <Stack.Screen name='GlicoHealthMain' component={GlicoHealthMain}/>
      <Stack.Screen name='StarLifeHealthMain' component={StarLifeHealthMain}/>
      <Stack.Screen name='StarWomenCare' component={StarWomenCare}/>
      <Stack.Screen name='StarHealthComprehensive' component={StarHealthComprehensive}/>
      <Stack.Screen name='StarHealthPremier' component={StarHealthPremier}/>
      <Stack.Screen name='StarOutPatient' component={StarOutPatient}/>
      <Stack.Screen name='StarSurplusInsurance' component={StarSurplusInsurance}/>

      <Stack.Screen name='AllianzHealthMain' component={AllianzHealthMain}/>
      <Stack.Screen name='FamilyLovePlan' component={FamilyLovePlan}/>
      <Stack.Screen name='AssuredInvestmentHealth' component={AssuredInvestmentHealth}/>
      <Stack.Screen name='AssuredChildEducation' component={AssuredChildEducation}/>
      <Stack.Screen name='AllianzBancassurance' component={AllianzBancassurance}/>
      <Stack.Screen name='HollardHealthMain' component={HollardHealthMain}/>
      <Stack.Screen name='HealthInsurancePlan' component={HealthInsurancePlan}/>
      <Stack.Screen name='HealthEssentialPlan' component={HealthEssentialPlan}/>
      <Stack.Screen name='SampleHealthInsurance' component={SampleHealthInsurance}/>















     
    
      <Stack.Screen name='Account' component={Account}/>
      <Stack.Screen name='AboutUs' component={AboutUs}/>
      <Stack.Screen name='Support' component={Support}/>
      <Stack.Screen name='TandC' component={TandC}/>
      <Stack.Screen name='GlicoLifeMain' component={GlicoLifeMain}/>
      <Stack.Screen name='GlicoLifeSaving' component={GlicoLifeSaving}/>
      <Stack.Screen name='GlicoFamilyLife' component={GlicoFamilyLife}/>
      <Stack.Screen name='GlicoEducation' component={GlicoEducation}/>
      <Stack.Screen name='GlicoFuneral' component={GlicoFuneral}/>
      <Stack.Screen name='GlicoEndService' component={GlicoEndService}/>
      <Stack.Screen name='StarLifeLifeMain' component={StarLifeLifeMain}/>
      <Stack.Screen name='StarLifeInsurance' component={StarLifeInsurance}/>
      <Stack.Screen name='HollardLifeMain' component={HollardLifeMain}/>
      <Stack.Screen name='HollardPurpleEmployee' component={HollardPurpleEmployee}/>
      <Stack.Screen name='HollardAdepaFamily' component={HollardAdepaFamily}/>
      <Stack.Screen name='AllianzTerm' component={AllianzTerm}/>
      <Stack.Screen name='AllianzFarewell' component={AllianzFarewell}/>
      <Stack.Screen name='AllianzWealth' component={AllianzWealth}/>
      <Stack.Screen name='AllianzEduflex' component={AllianzEduflex}/>
      <Stack.Screen name='AllianzLifeMain' component={AllianzLifeMain}/>
      <Stack.Screen name='StarLifeEmployeeSec' component={StarLifeEmployeeSec}/>

      
    </Stack.Navigator>
  </NavigationContainer>
  
);



export default function App() {
  return <AppNavigator />;
}