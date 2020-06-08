import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';

import HorizBar from './storeCharts/horizontalBar';
import HeaderComponent from './../../navigators/headerCode';


export class CurrentUsage extends Component {
 
  

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
     
      <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
      </View>
    <View  style={{  backgroundColor: '#fff', padding:20, paddingTop: 30,
    flexDirection: 'row',justifyContent: 'center',shadowColor: "#000",
    shadowOffset: {width: 0,height: 2}, shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    
    <Text style={{color: '#808080',fontSize: 25}}>November 2019</Text>
    
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
    <View style={{backgroundColor: '#DCDCDC', height: 20}} /> 


    <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
   
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{color: '#7e7e7e',fontWeight: 'bold',fontSize: 18,textAlign: 'left', }}>Monthly Rental Plan</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <Text style={{fontSize: 20,color: '#a8a8a8', }}>$ 399{'\n'}</Text>
    </View>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:-20,marginBottom:20 }}></View>
        

    {/* Voice */}
    <View style={{justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <View>
    <Text style={{color: '#7e7e7e',fontSize: 18,textAlign: 'left', }}>Voice</Text>
    <HorizBar progress={75}/>
    <Text style={{fontSize: 15,color: '#D3D3D3',textAlign: 'left',paddingBottom:5 }}>(450min/570min)</Text>
    </View>
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <Text style={{fontSize: 20,color: '#a8a8a8', }}>  ―  {'\n'}</Text>
    </View>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:-20,marginBottom:20 }}></View>
        

      {/* Data */}
    <View style={{justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <View>
    <Text style={{fontSize: 18,textAlign: 'left',color: '#7e7e7e' }}>Data</Text>
    <HorizBar progress={100}/>
    <Text style={{fontSize: 15,color: '#D3D3D3',textAlign: 'left', }}>(2GB / 2GB)</Text>
    <Text style={{fontSize: 16,textAlign: 'left', paddingVertical:5,color: '#7e7e7e'}}>Extra Usage: 1 GB</Text>
    </View>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <Text style={{fontSize: 20,color: '#a8a8a8', }}>$ 250{'\n'}</Text>
    </View>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:-20,marginBottom:20 }}></View>


       {/* SMS */}
    <View style={{justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <View>
    <Text style={{color: '#7e7e7e',fontSize: 18,textAlign: 'left', }}>SMS</Text>
    <HorizBar progress={80}/>
    <Text style={{fontSize: 15,color: '#D3D3D3',textAlign: 'left', paddingBottom:5 }}>(100 / 250)</Text>
    </View>
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <Text style={{fontSize: 20,color: '#a8a8a8', }}>  ―  {'\n'}</Text>
    </View>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:-20,marginBottom:20 }}></View>


       {/* Total */}
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontWeight: 'bold',fontSize: 20,textAlign: 'left', }}>Total</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <Text style={{fontSize: 20,color: '#a8a8a8', }}>$ 649{'\n'}</Text>
    </View>
    </View>
    
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

     <View style={{backgroundColor: '#DCDCDC', height: 80}} /> 

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
