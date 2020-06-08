import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class BalanceComponent extends Component {

    state = {
        text: '',
        text2: ''
      };

      render() {
        const data   = [ {date:"15 Sep, 19", time:"13:20", mob:"9876534561", amt:"$ 250"},
            {date:"11 Sep, 19", time:"11:12", mob:"9876534561", amt:"$ 250"},
            {date:"02 Sep, 19", time:"14:00", mob:"9876534561", amt:"$ 250"},
          ]
       
          var productLoop= [];
        for(let i=0;i<data.length;i++){
            productLoop.push(
              <View key={i}>
              <View  style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
              <View>
              <Text style={{fontSize: 15, color: '#696969',textAlign: 'left', }}>{data[i].date}</Text>
              </View>
              <View>
              <Text style={{fontSize: 15, color: '#696969',textAlign: 'left', }}>{data[i].time}</Text>
              </View>
              <View>
              <Text style={{fontSize: 15, color: '#696969',textAlign: 'left', }}>{data[i].mob}</Text>
              </View>
              <View>
              <Text style={{fontSize: 15, color: '#696969',textAlign: 'left', }}>{data[i].amt}</Text>
              </View>
              </View>
            <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:10, marginVertical:10,}}/>
            </View>
            );
          }


      return (
          <ScrollView>
        <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        }, 
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
      
      <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
      <View>
      <Text style={{fontSize: 12, color: '#696969',textAlign: 'left', }}>From</Text>
      </View>
      <View>
      <Text style={{fontSize: 12, color: '#696969',textAlign: 'left', }}>Available Balance</Text>
      </View>
      </View>
  
      <View style={{color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
      <View>
      <Text style={{fontSize: 20, color: '#696969',textAlign: 'left', }}>+91-9876543210</Text>
      </View>
      <View>
      <Text>
      
      <Text style={{fontSize: 20,color: '#000', }}>$ 250</Text>
       </Text>
      </View>
      </View>
  
      <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:2, 
      marginTop:20}}>
      <View>
      <Text style={{fontSize: 12, color: '#696969',textAlign: 'left', }}>To</Text>
      </View>
      <View>
      <Text style={{fontSize: 12, color: '#696969',textAlign: 'left' }}>Enter Amount</Text>
      </View>
      </View>
  
      <View style={{color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10,}}>
  
      <View style={{flex: 1,flexDirection: 'row',justifyContent: 'flex-start',alignItems: 'center',marginRight:10}}>
          
      <TextInput
  
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
  
          placeholder={'+91-9XXXX XXXXX'}
          placeholderTextColor="#A9A9A9"
          style={styles.input}
  
          />
          <Text>
          <AntDesign name="contacts" size={17} color="#605e69" />
          </Text>
      </View>
      <View style={{flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}}>
      <Text>$</Text>
      <TextInput
  
          value={this.state.text2}
          onChangeText={text2 => this.setState({ text2 })}
  
          placeholder={'000.00'}
          placeholderTextColor="#A9A9A9"
          style={styles.input2}
  
          />
       
      </View>
      </View>
      
      <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical:8}}>
      
          <TouchableOpacity
  
              style={styles.button2}
              //  onPress={this.onLogin.bind(this)}
              //onPress={this.onLogin()}
              underlayColor='#fff'
              >
              <Text style={styles.submitText2}>SEND</Text>
  
          </TouchableOpacity>
      </View>
      </View>
      <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
  
      <View style={{backgroundColor: '#DCDCDC', height: 8}} />
      


    <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        }, 
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
      <View>
        <Text style={{fontSize: 20, color: '#000',textAlign: 'left', }}>History</Text>
        </View>
        <View style={{ backgroundColor: '#D3D3D3', height:2,marginHorizontal:2, marginVertical:10,}}></View>
      {productLoop}
  
      

    </View>

</ScrollView>
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
      input: {
    
        width: 100,
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
    
        width: 100,
    
        padding: 5,
        flex:0.5,
        borderWidth: 1,
        borderBottomColor:'#A9A9A9',
        borderTopColor:'#fff',
        borderRightColor:'#fff',
        borderLeftColor:'#fff',
        
        color:'black'
    
      },
    
      button2:{
        width:100,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000099',
        marginBottom: 10,
        borderRadius:10,
        //color:'black',
        backgroundColor: '#000099'
        
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
    