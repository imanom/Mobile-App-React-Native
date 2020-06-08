import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons,Entypo } from '@expo/vector-icons';
import {Wallet} from './../landing/wallet';


export default class HeaderComponent extends Component {

    

      render() {

        const { navigate } = this.props.nav;
        const data   = {"Accounts":"My Accounts", "RechargeHistory":"Recharge History", "UsageHistory":"Usage History",
    "BalanceTransfer":"Balance Transfer","MoreServices":"Services", "Recharge":"Recharge", "Plans":"Plans",

    "Broadband":"My Accounts","Broadband2":"My Accounts", "BillHistory":"Bill History", "BRUsageHistory":"Usage History",
    "BRBalanceTransfer":"Balance Transfer","BRMoreServices":"Services", "BRRecharge":"Pay Now", 
    "BRPlans":"Subscribe Packs", "BRPaymentHistory":"Payment History",

    "Postpaid":"My Accounts","Postpaid2":"My Accounts", "POBillingHistory":"Billing History", "POUsageHistory":"Usage History",
    "POBalanceTransfer":"Balance Transfer","POMoreServices":"Services", "PORecharge":"Pay Now", 
    "POPlans":"Subscribe Packs", "POPaymentHistory":"Payment History", "POBillDetails":"Bill Details",
    "CurrentUsage":"Current Usage","POChangePlans":"Change Plan",

    "Main":"Game","Wallet":"Wallet"
}
    
      return (
         
        <Header
        
            leftComponent={
            
            <AntDesign name="back" size={25} color="#fff" onPress={() => this.props.nav.goBack()}
            />
        }
            centerComponent={{ text: data[this.props.routeName], style: { color: '#fff',fontSize: 20, fontWeight: 'bold'} }}
            rightComponent={
            // { icon: 'home', color: '#fff' }
            <View style={styles.iconContainer}>
            <TouchableHighlight onPress={() =>
          this.props.nav.push('Wallet' )
        }>
            <Entypo name="wallet" size={25} color="#fff"  />
            </TouchableHighlight>
            <Feather name="user" size={25} color="#fff"  />
            </View>
        }
            backgroundColor="#000099"
        
      />
      
      )
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 90
      },
  container: {
    flex: 1
  },
 
})