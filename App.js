import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { StyleSheet, Text, View } from 'react-native';
//import DrawerContainer from './src/navigators/drawer';
import AppContainer from './src/navigators/drawer';


export default class demoApp extends React.Component {
  
  render() {

  
    return (
       <AppContainer />
    );
  }
}