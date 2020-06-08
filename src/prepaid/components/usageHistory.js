import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
   import Constants from 'expo-constants';
   import { Header } from 'react-native-elements';
   import Dash from 'react-native-dash';
   import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import BarChart from './storeCharts/BarChart';
import HeaderComponent from './../../navigators/headerCode';
import UsageHistData from './tabsContentPages/usagehist_data';
import UsageHistSMS from './tabsContentPages/usagehist_sms';
import UsageHistVoice from './tabsContentPages/usagehist_voice';


export class UsageHistory extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        const month = [ "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        const data   = [ 50, 10, 40, 95, 85, 35, 53 ]
        
        return (
 <View style={styles.container}>
     <View >
     
     <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
        </View>

        <ScrollableTabView
    //  style={{  }}
     tabBarUnderlineStyle={{backgroundColor:'#fff',height:2,}}

     initialPage={0}
     tabBarBackgroundColor={'#00005a'}
     tabBarActiveTextColor={'#fff'}
     tabBarInactiveTextColor={'#fff'}
     renderTabBar={() => <ScrollableTabBar />}
   >
     <View tabLabel='   Data   ' style={{flex:1}}> 
     <UsageHistData/>
     </View>
     <View tabLabel='   Voice   ' style={{flex:1}}> 
      <UsageHistVoice/>
     </View>
     <View tabLabel='   SMS   ' style={{flex:1}}> 
     <UsageHistSMS/>
     </View>
     
  </ScrollableTabView>

       
            

</View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
      },
      iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 90
      },
    wrapper: {
        marginTop:30
    },
    slide1: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#fff'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
      },
      title:{
          alignItems:'center',

      }
     
    
    });

