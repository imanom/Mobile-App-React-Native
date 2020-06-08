import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import RechargeContent from './tabsContentPages/recharge_content';
import RechargeSlider from './tabsContentPages/recharge_slider';

import HeaderComponent from './../../navigators/headerCode';

export class Plans extends Component {
  
  

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#b489c9',
        height: 0.5,
      }}
    />
  );
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" style={{ fontSize: 24, color: tintColor }} />
    )
}

state = {
    text: '',
    text2: ''
  };

  render() {

    const { navigate } = this.props.navigation;

    const smsdata   = [ {label:"Special Recharge", text:"75 free outgoing minutes in nation roaming; incoming calls free; outgoing local SMS @25c/SMS; outgoing STD SMS @38c/SMS", amt:"$ 250", time:"Validity: 365 Days"},
            ];
    const voicedata   = [ {label:"Special Recharge", text:"75 free outgoing minutes in nation roaming; incoming calls free; outgoing local SMS @25c/SMS; outgoing STD SMS @38c/SMS", amt:"$ 250", time:"Validity: 365 Days"},
            {label:"Talktime", text:"75 free outgoing minutes in nation roaming; incoming calls free.", amt:"$ 150", time:"Validity: 30 Days"},
            {label:"Talktime", text:"Full Talktime.", amt:"$ 300", time:"Validity: NA"},
              ];
    const data   = [ {label:"Special Recharge", text:"75 free outgoing minutes in nation roaming; incoming calls free; outgoing local SMS @25c/SMS; outgoing STD SMS @38c/SMS", amt:"$ 250", time:"Validity: 365 Days"},
              {label:"Talktime", text:"75 free outgoing minutes in nation roaming; incoming calls free.", amt:"$ 150", time:"Validity: 30 Days"},
              {label:"Talktime", text:"Full Talktime.", amt:"$ 300", time:"Validity: NA"},
              {label:"Data", text:"5GB 3G/4G Data; post expiry charges: 50c/MB; Talktime: 5.", amt:"$ 400", time:"Validity: 365 Days"},
            ];
            
            
  return (
    <View style={styles.container}> 
      <View >
     
      <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
        </View>
      

        <ScrollableTabView
   
     tabBarUnderlineStyle={{backgroundColor:'#00005a',height:2}}

     initialPage={0}
     tabBarBackgroundColor={'#fff'}
     tabBarActiveTextColor={'#00005a'}
     tabBarInactiveTextColor={'#708090'}
     renderTabBar={() => <ScrollableTabBar />}
   >
     <View tabLabel='Suggested' style={{flex:1}}> 
     <RechargeContent data={data}/>
     </View>
     <View tabLabel='Frequent' style={{flex:1}}> 
     <RechargeContent data={data}/>
     </View>
     <View tabLabel='Voice' style={{flex:1}}> 
     <RechargeContent data={voicedata}/>
     </View>
     <View tabLabel='SMS' style={{flex:1}}> 
     <RechargeContent data={smsdata}/>
     </View>
     
  </ScrollableTabView>
 


</View>
  );
}
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 90
      },
  container: {
    flex: 1,
   
  },
 
  button2:{
    width:100,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000099',
    marginBottom: 10,
    marginRight:20,
    borderRadius:10,
    //color:'black',
    backgroundColor: '#000099'
    
},
submitText2:{

    //padding:2,
    color:'#fff',
    textAlign:'center',
    fontSize:13,
    //fontWeight:'bold',

},

 
input: {
    
    //width: 100,
   // height: 44,
    padding: 5,
    flex:1,
    borderWidth: 1,
    borderBottomColor:'#A9A9A9',
    borderTopColor:'#fff',
    borderRightColor:'#fff',
    borderLeftColor:'#fff',
    // borderColor: 'black',
    //marginBottom: 15,
    //marginTop: 15,
    //borderRadius:20,
    color:'black'

  },
  input2: {

    width: 70,
    justifyContent: 'flex-start',alignItems: 'center',
    padding: 5,
    //flex:0.5,
    borderWidth: 1,
    borderBottomColor:'#A9A9A9',
    borderTopColor:'#fff',
    borderRightColor:'#fff',
    borderLeftColor:'#fff',
    
    color:'black'

  },
});
