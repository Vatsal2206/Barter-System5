import React, { Component } from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen.js';
import HomeScreen from '../screens/HomeScreen.js';

export const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/home.png')}
          style={{ width: 22, height: 22 }}
        />
      ),
      tabBarLabel: 'Home',
    },
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/exchange.png')}
          style={{ width: 22, height: 22 }}
        />
      ),
      tabBarLabel: 'Exchange',
    },
  },
});
