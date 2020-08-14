import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Main from './pages/PageOne';
import BookAppointment from './pages/BookAppointment'
import JoinQueue from './pages/JoinQueue'
import SmallBusiness from './pages/SmallBusiness';
import Personal from './pages/Personal'
import Commercial from './pages/Commercial'
import Confirmation from './pages/Confirmation';

const App = createStackNavigator({
    Welcome: {
      screen: Main
    }, 
    'Join the Queue': 
    { 
      screen: BookAppointment 
    },
    'Join Queue':
    {
      screen: JoinQueue
    },
    'Small Business Banking':
    {
      screen: SmallBusiness
    },
    'Personal Banking':
    {
      screen: Personal
    },
    'Commercial Banking':
    {
      screen: Commercial
    },
    Confirmation:
    {
      screen: Confirmation
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);
export default createAppContainer(App);