import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createDrawerNavigator, NavigationDrawerRouterConfig,DrawerNavigatorItems} from 'react-navigation-drawer';
 import{ dashboard } from './../components/dashboard';
import{ HomeScreen } from './../components/home';
import{ LoginScreen } from './../components/login';

const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex:0.25, backgroundColor: '#fff',paddingBottom:10, opacity: 0.9 ,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 5,elevation: 20,}}>
        {/* <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
           </View> */}
        <View style={{ flex:1,  alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color: '#484B4A',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 27,
                padding:5
                }}>John Doe
          </Text>
          <Text style={{color: '#828A87',
                textAlign: 'center',
                
                fontSize: 15,
                
                }}>+91-9076452343
          </Text>
        </View>
      </View>
      <ScrollView style={{ paddingTop: 20 }}>
        <DrawerNavigatorItems {...props} />
      </ScrollView>
      
    </SafeAreaView>
  );
}

   const DrawerNavigator = createDrawerNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Logout'
      }
    },
    Dashboard: {
      screen:dashboard,
      navigationOptions: {
        title: 'Dashboard'
      }
    },
    
  },
    {
      drawerPosition: 'left',
      contentComponent: CustomDrawerNavigation,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: (width / 3) * 2
    });
const DrawerContainer = createAppContainer(DrawerNavigator);

  
export default DrawerContainer;