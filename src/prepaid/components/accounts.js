import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
import BalanceTransfer from './balance_transfer';
import MoreServices from './moreServices';
import RechargeHistory from './rechargehistory';
import UsageHistory from './usageHistory';
import Recharge from './recharge';

import HeaderComponent from './../../navigators/headerCode';


export class Accounts extends Component {
  
     

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
      <AntDesign name="mobile1" style={{ fontSize: 24, color: tintColor }} />
    )
}

  render() {

    const { navigate } = this.props.navigation;

    

  return (
    <ScrollView>
      <View style={styles.header}>
     
        
     <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
      </View>
    <View  style={{  backgroundColor: '#DCDCDC', padding:10, paddingTop: 30,marginBottom:-15}}>
    
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:5}}>Me</Text> 
    </View>
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontWeight: 'bold',fontSize: 20,textAlign: 'left', }}>9876543210</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <MaterialIcons name="sim-card" size={25} color="#808080" />
    <Text style={{fontSize: 20,color: '#808080', }}>Prepaid{'\n'}</Text>
    </View></View>
        
    </View>

    <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
    <View>
    <Text style={{fontSize: 20,textAlign: 'left', color: '#696969',textAlign: 'left', }}>Account Balance</Text>
    </View>
    <View>
    <Text>
    
    <Text style={{fontSize: 22,color: '#000', }}>$ 1020.5{'\n'}</Text>
    <Text style={{fontSize: 15,color: '#605e69', }}>Amount Left</Text>
    </Text>
    </View>
    </View>

     
    
    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical:8}}>
    <TouchableOpacity

            style={styles.button}
            //  onPress={this.onLogin.bind(this)}
            //onPress={this.onLogin()}
            onPress={() =>
              this.props.navigation.push('RechargeHistory')
            }yColor='#fff'
            >
            <Text style={styles.submitText}>RECHARGE HISTORY</Text>

        </TouchableOpacity>
        <TouchableOpacity

            style={styles.button2}
            //  onPress={this.onLogin.bind(this)}
            onPress={() =>
              navigate('Recharge',{name:'Me',num:'9876543210'})
            }
            underlayColor='#fff'
            >
            <Text style={styles.submitText2}>RECHARGE NOW</Text>

        </TouchableOpacity>
    </View>
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

    
     <View style={{backgroundColor: '#DCDCDC', height: 20}} /> 

    
     
    <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    <View>
    <Text style={{fontSize: 20,textAlign: 'left', color: '#696969',textAlign: 'left', }}>Data Balance{'\n'}</Text>
    </View>
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>

       
        
        <Dash style={{width:100, height:4, }} dashThickness={24} dashLength={10} dashGap={6} dashColor={'#008080'}/>
        <Dash style={{width:100, height:4, }} dashThickness={24} dashLength={10} dashGap={6} dashColor={'#D3D3D3'}/>
    <View style={{marginTop: -10}}>
    <Text>
    <Text style={{fontSize: 22,color: '#000', }}>1.1</Text>
    <Text style={{fontSize: 16,color: '#000', }}>GB/ 4 GB{'\n'}</Text>
    <Text style={{fontSize: 12,color: '#605e69', }}>Valid till 23rd Mar 2020</Text>
    </Text>
    </View>
    </View>

     
    
    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical:8}}>
    <TouchableOpacity

            style={styles.button}
            //  onPress={this.onLogin.bind(this)}
            //onPress={this.onLogin()}
            underlayColor='#fff'
            >
            <Text style={styles.submitText}>CHECK SPEED</Text>

        </TouchableOpacity>
        <TouchableOpacity

            style={styles.button2}
            //  onPress={this.onLogin.bind(this)}
            onPress={() =>
              navigate('Recharge',{name:'Me',num:'9876543210'})
            }
            underlayColor='#fff'
            >
            <Text style={styles.submitText2}>RECHARGE NOW</Text>

        </TouchableOpacity>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:10, marginBottom:10}}></View>
    <View>
    <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Plan Speed - 4G </Text>
    </View>
    <View>
    <Text style={{fontSize: 12,textAlign: 'left', color: '#A9A9A9'}}>After expiry of plan, your data will be charged at 50p/MB {'\n'}</Text>
    </View>
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

    
<View style={{backgroundColor: '#DCDCDC', height: 20}} /> 

<View>
<TouchableHighlight onPress={() =>
          navigate('UsageHistory')
        }>
<View style={{  backgroundColor: '#fff',padding:10,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
      <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
             <View>
            <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Usage History </Text>
            </View>
            <View>
    <Text>
    <MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />
    
    </Text>
    </View>
            
        </View>
    </View>
    </TouchableHighlight>
    </View>


    <View style={{backgroundColor: '#DCDCDC', height: 8}} /> 

    <View>
    <TouchableHighlight onPress={() =>
          navigate('BalanceTransfer')
        }>
    <View style={{  backgroundColor: '#fff',padding:10,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
      <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
             <View>
            <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Balance Transfer </Text>
            </View>
            <View>
    <Text>
    <MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />
    
    </Text>
    </View>
            
        </View>
    </View>
    </TouchableHighlight>
    </View>
    <View style={{backgroundColor: '#DCDCDC', height: 8}} />

<TouchableHighlight onPress={() =>
          navigate('MoreServices')
        }>
<View style={{  backgroundColor: '#fff',padding:10,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
      <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
             <View>
            <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Value Added Services </Text>
            </View>
            <View>
    <Text>
    <Feather name="plus" size={30} color="#605e69" />
    
    </Text>
    </View>
            
        </View>
        <View style={{paddingHorizontal:10}}>
        <View style={{justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
             <View>
            <Text style={{fontSize: 15,textAlign: 'left', color: '#696969'}}>International Roaming </Text>
            </View>
            <View>
            <Text style={{fontSize: 15,textAlign: 'left', color: '#990012'}}>DEACTIVATE </Text>
            </View>
            
        </View>
        <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:10, marginBottom:10}}></View>
        <View style={{justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
             <View>
            <Text style={{fontSize: 15,textAlign: 'left', color: '#696969'}}>Dialer Tune Plan </Text>
            </View>
            <View>
            <Text style={{fontSize: 15,textAlign: 'left', color: '#990012'}}>DEACTIVATE </Text>
            </View>
            
        </View>
        </View>
    </View>
    </TouchableHighlight>
    <View style={{backgroundColor: '#DCDCDC', height: 8}} /> 

     <View style={{  backgroundColor: '#fff',padding:10,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
      <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
             <View>
                 <Text>
                <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Help and Support </Text>
                
                <Text>
                <MaterialIcons name="info-outline" size={27} color="#605e69" />
                </Text> 
                </Text>
            </View>
          
            <View>
    <Text>
    <MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />
    
    </Text>
    </View>
            
        </View>
    </View>
    <View style={{backgroundColor: '#DCDCDC', height: 8}} />
    </ScrollView>
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
    flexDirection: 'row',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textStyles:{
    color: '#000',
    //fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 10

  },
  box: {
     backgroundColor: '#f0ffff',flex: 1,borderRadius: 15, borderColor: '#659ec7',
    borderWidth: 1.6,marginRight:5
  },
  button2:{
    
    padding: 10,
    borderWidth: 1,
    borderColor: '#659ec7',
    marginBottom: 10,
    borderRadius:20,
    //color:'black',
    backgroundColor: '#659ec7'
    
},
  button:{
    
    padding: 10,
    borderWidth: 1,
    borderColor: '#659ec7',
    marginBottom: 10,
    borderRadius:20,
    //color:'black',
    // backgroundColor: '#000099'
    
},
submitText2:{

    padding:2,
    color:'#fff',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',

},
submitText:{

    padding:2,
    color:'#659ec7',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',

},

 

});
