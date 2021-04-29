import * as React from 'react';
import LoginScreen from './screens/LoginScreen';
import ExchangeScreen from './screens/ExchangeScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { AppTabNavigator } from './components/AppTabNavigator';
import RegisterScreen from './screens/RegisterScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default function App() {
  return <AppContainer />;
}

const SwitchNavigator = createSwitchNavigator({
  s1: { screen: LoginScreen },
  s2: { screen: AppDrawerNavigator },
  s3: { screen: RegisterScreen },
  s4: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);
