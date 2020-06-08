import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons,Entypo } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
import HomeDown from './homeDown';
import Accounts from './../prepaid/components/accounts';
import Plans from './../prepaid/components/plans';
import Wallet from './wallet';
import Broadband from './../broadband/components/accounts';


export class Home extends Component {
  
  

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

  render() {

    const { navigate } = this.props.navigation;

    
    

  return (
    <ScrollView>
      <View style={styles.header}>
     
        <Header
        
          leftComponent={
            
          <Feather name="menu" size={25} color="#fff" onPress={() => this.props.navigation.openDrawer()}
          />
        }
          centerComponent={{ text: 'RAPIDS', style: { color: '#fff',fontSize: 20, fontWeight: 'bold'} }}
          rightComponent={
           // { icon: 'home', color: '#fff' }
           <View style={styles.iconContainer}>
           
           {/* <TouchableHighlight onPress={() =>
          navigate('Wallet')
        }> */}
           <Entypo name="wallet" size={25} color="#fff"  
           onPress={() => navigate('Wallet')}/>
           {/* </TouchableHighlight> */}
           <Feather name="user" size={25} color="#fff"  />
           </View>
        }
          backgroundColor="#000099"
          
        />
      </View>
    <View  style={{  backgroundColor: '#DCDCDC', padding:15, paddingTop: 15,flexDirection: 'row',justifyContent: 'space-between'}}>
    
    <Text style={{color: '#808080',fontSize: 20}}>My  Accounts</Text>
    <AntDesign name="plus" size={25} color="#000" alignSelf='flex-end' onPress={() =>
          navigate('Accounts')
        }/>
        
    </View>

    <View style={{  backgroundColor: '#fff',padding:15,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:5}}>Me</Text> 
    </View>
    <View style={{fontSize: 19,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontWeight: 'bold',fontSize: 19,textAlign: 'left', }}>9876543210</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <MaterialIcons name="sim-card" size={22} color="#D3D3D3" />
    <Text style={{fontSize: 19,color: '#D3D3D3', }}>Prepaid{'\n'}</Text>
    </View></View>

    <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
    <View>
    <Text>
    <Text style={{color: '#605e69',fontSize: 21, paddingBottom:10}}>$ </Text> 
    <Text style={{color: '#000',fontSize: 21, paddingBottom:10}}>1020.50{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>   Balance Amount</Text> 
    </Text>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', width: 2}}></View>
    <View>
    <Text>
    <Text style={{color: '#000',fontSize: 21, paddingBottom:10}}>10.5 GB{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>Data Balance</Text> 
    </Text>
    </View>
    </View>
    <View style={{backgroundColor: '#fff', height: 10}} />
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:10, paddingTop:5}}>Quick Recharge</Text> 
    </View>
    
    <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
    <View style={styles.box} >
      <Text style={styles.textStyles}>
       
       
        <Text style={{fontSize: 19, color: '#605e69'}}>$</Text>
        <Text style={{fontSize: 20}}> 250</Text></Text>
        <View style={{ backgroundColor: '#D3D3D3', height:2,marginHorizontal:10}}></View>
        <Text style={styles.textStyles}>
        <Text style={{fontSize: 10,color: '#808080'}}>3 GB data{'\n'}</Text>
        <Text style={{fontSize: 10,color: '#808080'}}>100 Talktime</Text>
      </Text>
      
      </View>
      
      <View style={styles.box} >
      <Text style={styles.textStyles}>
       
       
        <Text style={{fontSize: 19, color: '#605e69'}}>$</Text>
        <Text style={{fontSize: 20}}> 350</Text></Text>
        <View style={{ backgroundColor: '#D3D3D3', height:2,marginHorizontal:10}}></View>
        <Text style={styles.textStyles}>
        <Text style={{fontSize: 10,color: '#808080'}}>5 GB data{'\n'}</Text>
        <Text style={{fontSize: 10,color: '#808080'}}>100 Talktime</Text>
      </Text>
      
      </View>

      <View style={styles.box} >
      <Text style={styles.textStyles}>
        
        {/* <Text style={{fontSize: 40}}>399 </Text> */}
       
        <Text style={{fontSize: 19, color: '#605e69'}}>$</Text>
        <Text style={{fontSize: 20}}> 550</Text></Text>
        <View style={{ backgroundColor: '#D3D3D3', height:2,marginHorizontal:10}}></View>
        <Text style={styles.textStyles}>
        <Text style={{fontSize: 10,color: '#808080'}}>10 GB data{'\n'}</Text>
        <Text style={{fontSize: 10,color: '#808080'}}>200 Talktime</Text>
      </Text>
      
      </View>
      <View style={styles.box} >
      <Text style={styles.textStyles}>
        
        {/* <Text style={{fontSize: 40}}>399 </Text> */}
       
        <Text style={{fontSize: 19, color: '#605e69'}}>$</Text>
        <Text style={{fontSize: 20}}> 750</Text></Text>
        <View style={{ backgroundColor: '#D3D3D3', height:2,marginHorizontal:10}}></View>
        <Text style={styles.textStyles}>
        <Text style={{fontSize: 10,color: '#808080'}}>20 GB data{'\n'}</Text>
        <Text style={{fontSize: 10,color: '#808080'}}>400 Talktime</Text>
      </Text>
      
      </View>
    
    </View>
    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:12}}>
    <TouchableOpacity

            style={styles.button}
            //  onPress={this.onLogin.bind(this)}
            //onPress={this.onLogin()}
            onPress={() =>
              navigate('Plans')
            }
            underlayColor='#fff'
            >
            <Text style={styles.submitText}>VIEW MORE PLANS</Text>

        </TouchableOpacity>
    </View>
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

    
    
    
     <View style={{backgroundColor: '#DCDCDC', height: 20}} /> 

    
     <HomeDown nav={this.props.navigation}/>
     
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
    padding: 7

  },
  box: {
     backgroundColor: '#f0ffff',flex: 1,borderRadius: 15, borderColor: '#659ec7',
    borderWidth: 1.6,marginRight:5
  },
  button:{
    
    padding: 10,
    width:'100%',
    borderWidth: 1,
    borderColor: '#659ec7',
    marginBottom: 10,
    borderRadius:20,
    //color:'black',
    // backgroundColor: '#000099'
    
},

submitText:{

    padding:2,
    color:'#659ec7',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',

},

 

});
