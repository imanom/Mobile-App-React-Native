import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { StyleSheet, Text, View } from 'react-native';

import{ Home } from './../components/home';
import{ Accounts } from './../components/accounts';
import{ Recharge } from './../components/recharge';
import{ BalanceTransfer } from './../components/balance_transfer';
import{ UsageHistory } from './../components/usageHistory';
import{ RechargeHistory } from './../components/rechargehistory';
import DrawerContainer from './drawer';

const AppNavigator = createStackNavigator({
    DrawerNavigator: DrawerNavigator

    
  },
  {
    headerMode: 'none',
    //initialRouteName: 'Home',
  }
  );
 
  const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;