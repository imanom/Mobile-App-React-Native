import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class RechargeContent extends Component {

    

      render() {

        
        const data   = [ {label:"Storm Plans", text:"150 Mbps internet speed; 650 GB Monthly data; 1500 GB extra data; 1Mbps post FUP speed", amt:"$ 1159", time:"Validity: 30 Days"},
            {label:"Incredible Plan", text:"250 Mbps internet speed; 1000 GB Monthly data; 1500 GB extra data; 2Mbps post FUP speed", amt:"$ 1999", time:"Validity: 30 Days"},
            {label:"Giga Plan", text:"1 Gbps internet speed; 3500 GB Monthly data; 1500 GB extra data; 5Mbps post FUP speed", amt:"$ 5999", time:"Validity: 30 Days"},
            {label:"Basic Plan", text:"100 Mbps internet speed; 500 GB Monthly data; 1500 GB extra data; 1Mbps post FUP speed", amt:"$ 2590", time:"Validity: 30 Days"},
          ]
       

          var productLoop= [];
          for(let i=0;i<data.length;i++){
              productLoop.push(
                <View key={i}>
                  <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
          <View style={{width:200}}>
              <Text>
                <Text style={{fontWeight: 'bold',fontSize: 14, color: '#000',textAlign: 'left', }}>{data[i].label} </Text>
                <Text style={{fontSize: 12, color: '#696969',textAlign: 'left', }}>{data[i].text} </Text>
                
            </Text>
          </View>
          <View style={{flex:1, marginTop: 10}}>
          <View style={{alignItems:'flex-end'}}>
          <View style={styles.rupeebox}>
                <Text>
                {/* <FontAwesome name="rupee" size={17} color="#605e69" /> */}
                <Text style={{fontSize: 18, color: '#696969',textAlign: 'left', }}>{data[i].amt}</Text>
                </Text>
                </View>
                <Text style={{fontSize: 12, color: '#C0C0C0',textAlign: 'left', }}>{data[i].time}</Text>
            </View>
            
            </View>
            </View>
              <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
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
      rupeebox: {
        padding:5, 
        borderColor:'#00005a',
        borderRadius:10,
        borderWidth: 1, 
        backgroundColor:'#ebf4fa'
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
    