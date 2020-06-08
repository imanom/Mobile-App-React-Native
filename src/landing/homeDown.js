import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,
  Dimensions,ActivityIndicator,TouchableHighlight,TouchableOpacity, AsyncStorage, Image } from 'react-native';

import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';

import Recharge from './../prepaid/components/recharge';
import Broadband from './../broadband/components/accounts';
import Postpaid from './../postpaid/components/accounts';

import Main from './../game_prepaid/main';

export default class HomeDown extends Component {
  
  render() {

    const { navigate } = this.props.nav;
    
   

  return (
    <ScrollView>
      


<View style={{  backgroundColor: '#fff',shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 }, 
 shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
 <TouchableHighlight onPress={() =>
          navigate('Main')
        }>
 <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row'}}>
        <View>
            {/* <Text>
           <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Play game to earn points!</Text>
         
           </Text> */}
           <Image
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height -600 ,flex:1,resizeMode: 'stretch'}}
          source={require('./../../assets/games.png')}
        />
           
       </View>
     
       {/* <View>
<Text>
<MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />

</Text>
</View> */}
       
   </View>
</TouchableHighlight>
</View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
    <View style={{backgroundColor: '#DCDCDC', height: 20}} /> 



      <View>
<TouchableHighlight onPress={() =>
          navigate('Broadband')
        }>
    <View style={{  backgroundColor: '#fff',padding:10, paddingHorizontal:20, shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:5}}>Home</Text> 
    </View>
    <View style={{fontSize: 19,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontWeight: 'bold',fontSize: 19,textAlign: 'left', }}>0805674321</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <AntDesign name="wifi" size={22} color="#D3D3D3" />
    <Text style={{fontSize: 19,color: '#D3D3D3', }}>Broadband</Text>
    </View></View>

    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <View>
    <Text>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:10}}>$ </Text> 
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>1020.50{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>   Balance Amount</Text> 
    </Text>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', width: 2}}></View>
    <View>
    <Text>
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>10.5 GB{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>Data Balance</Text> 
    </Text>
    </View>
    </View>
    <View style={{backgroundColor: '#fff', height: 10}} />
    
      
    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <TouchableOpacity

            style={styles.button}
            onPress={() =>
              navigate('Recharge',{name:'Home',num:'0805674321'})
            }
            underlayColor='#fff'
            >
            <Text style={styles.submitText}>PAY NOW</Text>

        </TouchableOpacity>
    </View>
    </View>
    </TouchableHighlight>
    </View>


    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

     <View style={{backgroundColor: '#DCDCDC', height: 10}} /> 




{/* SECOND   */}
 <View>
<TouchableHighlight onPress={() =>
          navigate('Postpaid')
        }>
    <View style={{  backgroundColor: '#fff',padding:10,paddingHorizontal:20, shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:5}}>Work</Text> 
    </View>
    <View style={{fontSize: 19,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontWeight: 'bold',fontSize: 19,textAlign: 'left', }}>0805674321</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <MaterialIcons name="sim-card" size={22} color="#D3D3D3" />
    <Text style={{fontSize: 19,color: '#D3D3D3', }}>Postpaid</Text>
    </View></View>

    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <View>
    <Text>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:10}}>$ </Text> 
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>1020.50{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>   Balance Amount</Text> 
    </Text>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', width: 2}}></View>
    <View>
    <Text>
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>10.5 GB{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>Data Balance</Text> 
    </Text>
    </View>
    </View>
    <View style={{backgroundColor: '#fff', height: 10}} />
    
      
    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <TouchableOpacity

            style={styles.button}
            onPress={() =>
              navigate('Recharge',{name:'Work',num:'0805674321'})
            }
            underlayColor='#fff'
            >
            <Text style={styles.submitText}>PAY NOW</Text>

        </TouchableOpacity>
    </View>
    </View>
    </TouchableHighlight>
    </View>



     <View style={{backgroundColor: '#DCDCDC', height: 20}} /> 
	 
	 {/* POSTERS!!! */}
	 
	 <View style={{  backgroundColor: '#fff',shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 }, 
 shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
 <TouchableHighlight onPress={() =>
          {/* navigate('Main') */}
        }>
 <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row'}}>
        <View>
            {/* <Text>
           <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Play game to earn points!</Text>
         
           </Text> */}
           <Image
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height -620 ,flex:1,resizeMode: 'stretch'}}
          source={require('./../../assets/poster1.png')}
        />
           
       </View>
     
       {/* <View>
<Text>
<MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />

</Text>
</View> */}
       
   </View>
</TouchableHighlight>
</View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
    <View style={{backgroundColor: '#DCDCDC', height: 10}} /> 
	
	<View style={{  backgroundColor: '#fff',shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 }, 
 shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
 <TouchableHighlight onPress={() =>
	 {/* navigate('Main') */}
        }>
 <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row'}}>
        <View>
            {/* <Text>
           <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Play game to earn points!</Text>
         
           </Text> */}
           <Image
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height -620 ,flex:1,resizeMode: 'stretch'}}
          source={require('./../../assets/poster2.png')}
        />
           
       </View>
     
       {/* <View>
<Text>
<MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />

</Text>
</View> */}
       
   </View>
</TouchableHighlight>
</View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
    <View style={{backgroundColor: '#DCDCDC', height: 8}} /> 

    
     {/* Other Accounts!!! */}
    <View  style={{  backgroundColor: '#DCDCDC', padding:10, paddingTop: 20,flexDirection: 'row',justifyContent: 'space-between'}}>
    
    <Text style={{color: '#808080',fontSize: 25}}>Other  Accounts</Text>
        
    </View>

     <View style={{  backgroundColor: '#fff',padding:10,paddingHorizontal:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{fontWeight: 'bold',color: '#605e69',fontSize: 20, paddingBottom:5}}>John</Text> 
    </View>
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontSize: 18,textAlign: 'left', color:'#808080'}}>0805674321</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <MaterialIcons name="sim-card" size={22} color="#D3D3D3" />
    <Text style={{fontSize: 20,color: '#D3D3D3', }}>Prepaid</Text>
    </View></View>

    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <View>
    <Text>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:10}}>$ </Text> 
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>1020.50{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>   Balance Amount</Text> 
    </Text>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', width: 2}}></View>
    <View>
    <Text>
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>10.5 GB{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>Data Balance</Text> 
    </Text>
    </View>
    </View>
    <View style={{backgroundColor: '#fff', height: 10}} />
    
      
    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <TouchableOpacity

            style={styles.button}
            onPress={() =>
              navigate('Recharge',{name:'John',num:'0805674321'})
            }
            underlayColor='#fff'
            >
            <Text style={styles.submitText}>PAY NOW</Text>

        </TouchableOpacity>
    </View>
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

     <View style={{backgroundColor: '#DCDCDC', height: 10}} /> 

     <View style={{  backgroundColor: '#fff',padding:10,paddingHorizontal:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text style={{fontWeight:'bold',color: '#605e69',fontSize: 20, paddingBottom:5}}>Riya</Text> 
    </View>
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',}}>
    
    <Text style={{fontSize: 18,textAlign: 'left',color:'#808080' }}>0805674321</Text>
    
    <View style={{alignSelf:'flex-end',flexDirection: 'row'}}>
    
    <MaterialIcons name="sim-card" size={22} color="#D3D3D3" />
    <Text style={{fontSize: 20,color: '#D3D3D3', }}>Prepaid</Text>
    </View></View>

    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <View>
    <Text>
    <Text style={{color: '#605e69',fontSize: 19, paddingBottom:10}}>$ </Text> 
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>1020.50{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>   Balance Amount</Text> 
    </Text>
    </View>
    <View style={{ backgroundColor: '#D3D3D3', width: 2}}></View>
    <View>
    <Text>
    <Text style={{color: '#000',fontSize: 20, paddingBottom:10}}>10.5 GB{'\n'}</Text> 
    <Text style={{color: '#C0C0C0',fontSize: 17, paddingBottom:10}}>Data Balance</Text> 
    </Text>
    </View>
    </View>
    <View style={{backgroundColor: '#fff', height: 10}} />
    
      
    <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingTop:8}}>
    <TouchableOpacity

            style={styles.button}
            onPress={() =>
              navigate('Recharge',{name:'Riya',num:'0805674321'})
            }
            underlayColor='#fff'
            >
            <Text style={styles.submitText}>PAY NOW</Text>

        </TouchableOpacity>
    </View>
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

     <View style={{backgroundColor: '#DCDCDC', height: 10}} /> 
	 
	 
	 {/* OTHER POSTERS!!!!!*/}
	 <View style={{  backgroundColor: '#fff',shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 }, 
 shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
 <TouchableHighlight onPress={() =>
	 {/* navigate('Main') */}
        }>
 <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row'}}>
        <View>
            {/* <Text>
           <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Play game to earn points!</Text>
         
           </Text> */}
           <Image
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height -620 ,flex:1,resizeMode: 'stretch'}}
          source={require('./../../assets/news.png')}
        />
           
       </View>
     
       {/* <View>
<Text>
<MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />

</Text>
</View> */}
       
   </View>
</TouchableHighlight>
</View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
    <View style={{backgroundColor: '#DCDCDC', height: 8}} /> 

	<View style={{  backgroundColor: '#fff',shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 }, 
 shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
 <TouchableHighlight onPress={() =>
	 {/* navigate('Main') */}
        }>
 <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row'}}>
        <View>
            {/* <Text>
           <Text style={{fontSize: 20,textAlign: 'left', color: '#696969'}}>Play game to earn points!</Text>
         
           </Text> */}
           <Image
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height -620 ,flex:1,resizeMode: 'stretch'}}
          source={require('./../../assets/entertainment.png')}
        />
           
       </View>
     
       {/* <View>
<Text>
<MaterialIcons name="keyboard-arrow-right" size={40} color="#605e69" />

</Text>
</View> */}
       
   </View>
</TouchableHighlight>
</View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
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
  button:{
    
    padding: 10,
    width:'100%',
    borderWidth: 1,
    borderColor: '#659ec7',
    marginBottom: 10,
    borderRadius:20,
    //color:'black',
    backgroundColor: '#659ec7'
    
},

submitText:{

    padding:2,
    color:'#fff',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',

},

 

});
