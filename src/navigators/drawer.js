import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, NavigationDrawerRouterConfig,DrawerNavigatorItems} from 'react-navigation-drawer';
 import{ Home } from './../landing/home';
 import {Wallet} from './../landing/wallet';

 //Games
 import { Main } from './../game_prepaid/main';

//  Prepaid
 import{ Accounts } from './../prepaid/components/accounts';
import{ Recharge } from './../prepaid/components/recharge';
import{ Plans } from './../prepaid/components/plans';
 import{ BalanceTransfer } from './../prepaid/components/balance_transfer';
 import{ MoreServices } from './../prepaid/components/moreServices';
 import{ RechargeHistory } from './../prepaid/components/rechargehistory';
 import{ UsageHistory } from './../prepaid/components/usageHistory';


 //Broadband
 import{ Broadband } from './../broadband/components/accounts';
 import{ BRRecharge } from './../broadband/components/recharge';
 import{ BRPlans } from './../broadband/components/plans';
  import{ BRBalanceTransfer } from './../broadband/components/balance_transfer';
  import{ BRMoreServices } from './../broadband/components/moreServices';
  import{ BillHistory } from './../broadband/components/billhistory';
  import{ BRPaymentHistory } from './../broadband/components/paymentHistory';
  import{ BRUsageHistory } from './../broadband/components/usageHistory';


//Postpaid
import{ Postpaid } from './../postpaid/components/accounts';
import{ PORecharge } from './../postpaid/components/recharge';
import{ POPlans } from './../postpaid/components/plans';
 import{ POBalanceTransfer } from './../postpaid/components/balance_transfer';
 import{ POMoreServices } from './../postpaid/components/moreServices';
 import{ POBillingHistory } from './../postpaid/components/billinghistory';
 import{ POPaymentHistory } from './../postpaid/components/paymentHistory';
 import{ POBillDetails } from './../postpaid/components/billDetails';
 import{ POUsageHistory } from './../postpaid/components/usageHistory';
 import { CurrentUsage } from './../postpaid/components/currentusage';
import { POChangePlans } from './../postpaid/components/changeplans';


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
              <View style={{ flex:1,  alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color: '#484B4A',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 27,
                padding:5
                }}>Welcome!
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
    
    Home: {
      screen:Home,
      navigationOptions: {
        title: 'Home'
      }
    },
    Accounts: {
      screen:Accounts,
      navigationOptions: {
        title: 'Prepaid Account'
      }
    },
    //PONavigator: PONavigator,
    Broadband2: {
      screen:Broadband,
      navigationOptions: {
        title: 'Broadband Account'
      }
    },
    Postpaid2: {
      screen:Postpaid,
      navigationOptions: {
        title: 'Postpaid Account'
      }
    },
    
    
  },
    {
      drawerPosition: 'left',
      contentComponent: CustomDrawerNavigation,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: (width / 3) * 2,
      initialRouteName: 'Home',
    });
const DrawerContainer = createAppContainer(DrawerNavigator);

const PONavigator = createStackNavigator({
  DrawerNavigator: DrawerNavigator,
  Postpaid: {
    screen:Postpaid,
    navigationOptions: {
      title: 'Postpaid Account'
    }
  },
  CurrentUsage:{
    screen:CurrentUsage,
    navigationOptions: {
      title: 'Current Usage'
    }
  },
  PORecharge: {
    screen:PORecharge,
    navigationOptions: {
      title: 'Recharge'
    }
  },
  POPlans: {
    screen:POPlans,
    navigationOptions: {
      title: 'Plans'
    }
  },
  POChangePlans:{
    screen:POChangePlans,
    navigationOptions: {
      title: 'Change Plans'
    }
  },

  POBalanceTransfer: {
    screen:POBalanceTransfer,
    navigationOptions: {
      title: 'Balance Transfer'
    }
  },
  POMoreServices: {
    screen:POMoreServices,
    navigationOptions: {
      title: 'Services'
    }
  },
  POBillingHistory: {
    screen:POBillingHistory,
    navigationOptions: {
      title: 'Billing History'
    }
  },
  POUsageHistory: {
    screen:POUsageHistory,
    navigationOptions: {
      title: 'Usage History'
    }
  },
  POPaymentHistory: {
    screen:POPaymentHistory,
    navigationOptions: {
      title: 'Payment History'
    }
  },
  POBillDetails: {
    screen:POBillDetails,
    navigationOptions: {
      title: 'Bill Details'
    }
  },
},
{
  headerMode: 'none',
  //initialRouteName: 'Home',
}
);

const BRNavigator = createStackNavigator({
  DrawerNavigator: DrawerNavigator,
  Broadband: {
      screen:Broadband,
      navigationOptions: {
        title: 'Broadband Account'
      }
    },
  BRRecharge: {
    screen:BRRecharge,
    navigationOptions: {
      title: 'Recharge'
    }
  },
  BRPlans: {
    screen:BRPlans,
    navigationOptions: {
      title: 'Plans'
    }
  },

  BRBalanceTransfer: {
    screen:BRBalanceTransfer,
    navigationOptions: {
      title: 'Balance Transfer'
    }
  },
  BRMoreServices: {
    screen:BRMoreServices,
    navigationOptions: {
      title: 'Services'
    }
  },
  BillHistory: {
    screen:BillHistory,
    navigationOptions: {
      title: 'Bill History'
    }
  },
  BRUsageHistory: {
    screen:BRUsageHistory,
    navigationOptions: {
      title: 'Usage History'
    }
  },
  BRPaymentHistory: {
    screen:BRPaymentHistory,
    navigationOptions: {
      title: 'Payment History'
    }
  },
},
{
  headerMode: 'none',
  //initialRouteName: 'Home',
}
);


const AppNavigator = createStackNavigator({
  
  BRNavigator: BRNavigator,
  PONavigator:PONavigator,
  DrawerNavigator: DrawerNavigator,
  Recharge: {
    screen:Recharge,
    navigationOptions: {
      title: 'Recharge'
    }
  },
  Plans: {
    screen:Plans,
    navigationOptions: {
      title: 'Plans'
    }
  },

  BalanceTransfer: {
    screen:BalanceTransfer,
    navigationOptions: {
      title: 'Balance Transfer'
    }
  },
  MoreServices: {
    screen:MoreServices,
    navigationOptions: {
      title: 'Services'
    }
  },
  RechargeHistory: {
    screen:RechargeHistory,
    navigationOptions: {
      title: 'Recharge History'
    }
  },
  UsageHistory: {
    screen:UsageHistory,
    navigationOptions: {
      title: 'Usage History'
    }
  },
  Main:{
    screen:Main,
    navigationOptions: {
      title: 'Game!'
    }
  },
  Wallet:{
    screen:Wallet,
    navigationOptions: {
      title: 'Wallet'
    }
  }
},
{
  headerMode: 'none',
  //initialRouteName: 'Home',
}
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
  
//export default DrawerContainer;