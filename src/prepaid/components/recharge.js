import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import {Dialog, DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog';
import RechargeContent from './tabsContentPages/recharge_content';
import RechargeSlider from './tabsContentPages/recharge_slider';

import HeaderComponent from './../../navigators/headerCode';

export class Recharge extends Component {
  
  

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
    visible:false
  };

  render() {

    const { navigate } = this.props.navigation;

    const user = this.props.navigation.state.params.name;
    const num = this.props.navigation.state.params.num;
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

        <Dialog
        visible={this.state.visible}
        width={Math.round(Dimensions.get('window').width)-50}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
        
      >

        <DialogContent>
          <View>
          <View style={{paddingVertical:20,alignItems:'center'}}>
           <Text style={{fontSize:18}}> Recharge successful!</Text>
           </View>
           <DialogButton
            text="Okay"
            
            onPress={() => {
              this.setState({ visible: false });
            }}
          />
           </View>
        </DialogContent>
      </Dialog>
        
        <View  style={{  backgroundColor: '#DCDCDC', padding:10, paddingVertical: 20}}>
    
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:5}}>{user}</Text> 
    </View>
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontWeight: 'bold',fontSize: 20,textAlign: 'left', }}>{num}</Text>
    
    </View>
        
    </View>
      
    <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:2}}>
    <View>
    <Text style={{fontSize: 17,textAlign: 'left', color: '#696969',textAlign: 'left', }}>Enter Amount</Text>
    </View>
   
    </View>

     
    
    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
    <View style={{flex: 1,flexDirection: 'row',justifyContent: 'flex-start',alignItems: 'center',}}>
    <Text>$</Text>
      <TextInput
  
          value={this.state.text2}
          onChangeText={text2 => this.setState({ text2 })}
          keyboardType={'numeric'}
          placeholder={'000.00'}
          placeholderTextColor="#A9A9A9"
          style={styles.input2}
  
          />
          </View>
          <TouchableOpacity
  
  style={styles.button2}
  onPress={() =>
    this.setState({ visible: true })
  }
  underlayColor='#fff'
  >
  <Text style={styles.submitText2}>Pay</Text>

</TouchableOpacity>
    </View>
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

    
     <View style={{backgroundColor: '#DCDCDC', height: 20}} /> 



        <ScrollableTabView
    //  style={{  }}
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
