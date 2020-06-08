import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { Dialog, DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog';
import RechargeContent from './tabsContentPages/recharge_content';
import RechargeSlider from './tabsContentPages/recharge_slider';

import HeaderComponent from './../../navigators/headerCode';

export class POChangePlans extends Component {
  
  

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
    text2: '',
    visible: false
  };

  render() {

    const { navigate } = this.props.navigation;

    
  return (
    <View style={styles.container}> 
    
      <View >
     
      <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
        </View>
      

        <ScrollView>
        <View style={{paddingHorizontal:10,paddingTop:15,paddingBottom:5,alignSelf:'flex-start',flexDirection: 'row'}}>
                
                <Text style={{color:'#659ec7',fontSize:20}}>Current Plan</Text>
                
            </View>
        <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        }, 
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>

         
      
   <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
          <View style={{width:200}}>
              <Text>
                <Text style={{fontWeight: 'bold',fontSize: 14, color: '#000',textAlign: 'left', }}>Corporate Plan </Text>
                <Text style={{fontSize: 12, color: '#696969',textAlign: 'left', }}>
                100 GB 3G/4G Data rollover; unlimited STD and Roaming calls; 1 months netflix subscription; amazon prime subscription
                 </Text>
                
            </Text>
          </View>
          <View style={{flex:1, marginTop: 10}}>
          <View style={{alignItems:'flex-end'}}>
          <View style={styles.rupeebox}>
                <Text>
                {/* <FontAwesome name="rupee" size={17} color="#605e69" /> */}
                <Text style={{fontSize: 18, color: '#696969',textAlign: 'left', }}>$ 399</Text>
                </Text>
                </View>
                <Text style={{fontSize: 12, color: '#C0C0C0',textAlign: 'left', }}>Validity: 81 Days</Text>
            </View>
            
            </View>
            </View>
              <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
    </View>
    <View style={{paddingHorizontal:10,paddingTop:25,paddingBottom:10,alignSelf:'flex-start',flexDirection: 'row'}}>
                
                    <Text style={{color:'#659ec7',fontSize:20}}>Other Plans</Text>
                    
                </View>
                <View style={{  backgroundColor: '#fff',shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        }, 
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>

      
     <RechargeContent/>

     </View>
     
  </ScrollView>
 


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
rupeebox: {
    padding:5, 
    borderColor:'#00005a',
    borderRadius:10,
    borderWidth: 1, 
    backgroundColor:'#ebf4fa'
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
