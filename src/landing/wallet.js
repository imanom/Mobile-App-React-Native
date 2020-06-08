import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons,Entypo } from '@expo/vector-icons';

//import HeaderComponent from './../navigators/headerCode';


export class Wallet extends Component {
    constructor(props) {
        super(props);
        
      this.state={
        points: '0',
        // total:0
      };
    
      
     
      }
  

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
      <AntDesign name="wifi" style={{ fontSize: 24, color: tintColor }} />
    )
}

componentDidMount() {
  this._isMounted = true;

  AsyncStorage.getItem('POINTS').then(
    value =>{
    // if (value!=null){
      this.setState({
        points: value,
        // total : parseInt(value) + this.state.total
      })
    // }
  }
  );
  
}
func() {
    

    return(
      <Text>{this.state.points}</Text>
    )

  }

  render() {

    const { navigate } = this.props.navigation;

    

  return (
    <ScrollView>
        <View>
      <Header
        
        leftComponent={
        
        <AntDesign name="back" size={25} color="#fff" onPress={() => this.props.navigation.goBack()}
        />
    }
    centerComponent={{ text: 'Wallet', style: { color: '#fff',fontSize: 20, fontWeight: 'bold'} }}
        rightComponent={
        // { icon: 'home', color: '#fff' }
        <View style={styles.iconContainer}>
       
        <Entypo name="wallet" size={25} color="#fff"  />
        
        <Feather name="user" size={25} color="#fff"  />
        </View>
    }
        backgroundColor="#000099"
    
  />
  </View>
    

    <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    
    <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
    <View>
      <Text>
    <Text style={{fontSize: 20,textAlign: 'left', color: '#696969',textAlign: 'left', }}>Wallet Balance{'\n'}</Text>
    <Text style={{fontSize: 13,color: '#C0C0C0', }}>Expiry Date: 22/06/2020</Text>
    </Text>
    </View>
    <View>
    <Text>
    
    <Text style={{fontSize: 22,color: '#000', }}>{this.func()}{'\n'}</Text>
    <Text style={{fontSize: 15,color: '#605e69', }}>Points</Text>
    </Text>
    </View>
    </View>

     
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

  

    <View style={{backgroundColor: '#DCDCDC', height: 20}} /> 

    
   
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
