import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Swiper from 'react-native-swiper';

export default class RechargeSlider extends Component {

    

      render() {

        const data   = [ {date:"30th",label:"Special Recharge:", text:"75 free outgoing minutes in nation roaming; incoming calls free; outgoing local SMS @25c/SMS; outgoing STD SMS @38c/SMS", amt:"$250", time:"Validity: 365 Days"},
            {date:"29th",label:"Talktime:", text:"75 free outgoing minutes in nation roaming; incoming calls free.", amt:"$250", time:"Validity: 30 Days"},
            {date:"28th",label:"Talktime:", text:"Full Talktime.", amt:"$250", time:"Validity: NA"},
            {date:"27th",label:"Data:", text:"5GB 3G/4G Data; post expiry charges: 50c/MB; Talktime: 5.", amt:"$250", time:"Validity: 365 Days"},
          ]
       
          const productLoop = [];
          for(let i=0;i<data.length;i++){
          productLoop.push(
            <View key={i}>
            <View style={{fontSize: 20,color: '#000',justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
            <View >
            <View style={{paddingRight:30}}>
                  <Text>
                  
                  <Text style={{fontSize: 18, color: '#696969',textAlign: 'left', }}>{data[i].date}</Text>
                  </Text>
                 
              </View>
            </View>
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
                 
                  <Text style={{fontSize: 18, color: '#696969',textAlign: 'left', }}>{data[i].amt}</Text>
                  </Text>
                  </View>
                  <Text style={{fontSize: 12, color: '#C0C0C0',textAlign: 'left', }}>{data[i].time}</Text>
              </View>
              
            </View>
        </View>
          <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
        </View>
          )
        }


      return (
          <ScrollView>
        <View style={{  backgroundColor: '#fff',padding:10,shadowColor: "#000",
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

     
    wrapper: {
        marginBottom:200
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    text: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
      },
      
      
   
    
     
    
    });
