import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { name as PolicySift } from './app.json';

const AppContainer = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

AppRegistry.registerComponent(PolicySift, () => AppContainer);