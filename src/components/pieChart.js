import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart';

export default class Doughnut extends Component {

    render() {

        const chart_wh = 200
    
        const series = [1, 1, 2]
    
        const sliceColor = ['#CA226B','#FAE20A','#22AECA']
    
        
    
      return ( 
        <View style={styles.container2}>

        <StatusBar
          hidden={true}
        />


        <Text style={styles.title}>Usage Chart</Text>
        <View style={{flex:1,flexDirection:'row',}}>
        <View style={{flex:0.2}}/>
      <View style={{flex:1}}>
        <PieChart
          chart_wh={chart_wh}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
      </View>
      <View style={{flex:0.5}}/>
      <View style={{flex:1, }}>
      <Text style={{paddingTop:50}}>
      <MaterialCommunityIcons name="checkbox-blank-circle" size={20} color="#CA226B" 
          />
          <Text style={{paddingLeft:100}}>Voice{'\n'}</Text>
          <MaterialCommunityIcons name="checkbox-blank-circle" size={20} color="#FAE20A" 
          />
           <Text style={{marginLeft:20}}>SMS{'\n'}</Text>
           <MaterialCommunityIcons name="checkbox-blank-circle" size={20} color="#22AECA" 
          />
           <Text style={{padding:20}}>Data{'\n'}</Text>
          </Text>
      </View>
      </View>
      <View style={{ height: 20, backgroundColor: '#fff'}}></View>
      <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
      </View>
      );
    }
    }

    const styles = StyleSheet.create({
        container2: {
           // flex: 1,
           // flexDirection:'row',
           //alignItems: 'center'
           backgroundColor:'#fff',
         
         },
         
         title: {
           fontSize: 24,
           margin: 10,
           
           fontWeight:'bold',

          // alignItems: 'center',
           textAlign: 'center',
         }
         });