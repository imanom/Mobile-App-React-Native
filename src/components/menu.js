import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import{ dashboard } from './src/components/dashboard';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import {Icon, Header} from 'react-native-elements'

const Menu = createDrawerNavigator(
    {
    //   Home: HomeScreen,
    Dashboard: dashboard,
     
    },
    {
      drawerWidth: 300,
      drawerPosition: 'left',
      initialRouteName: 'Dashboard',
    }
  )

  const MenuContainer = () => {
    let pressMenu
    
    return(
      <React.Fragment>
        <Header
          backgroundColor="white"
          leftComponent={
            <Icon
              name="menu"
              onPress={() => {
                pressMenu.dispatch(DrawerActions.toggleDrawer())
                  }}
             />
          }
        />
        <Menu
           ref={navigatorRef => { pressMenu = navigatorRef}}
        />
      </React.Fragment>
    )
  }
  export default MenuContainer