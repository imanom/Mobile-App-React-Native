import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class Deactivate extends Component {

   
      render() {

       
      return (
        <View style={{paddingTop:10}}>
        <View style={styles.container}>
        <View>
            <Text style={{fontSize:17}}>International Roaming </Text>
        </View>
        <View>
            <Text>
            <Text style={{fontSize:17}}>$ 250</Text>
            </Text>
         </View>
            </View>
            <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:5,marginVertical:10 }}></View>
            <View style={styles.container}>
            
            <View>
            <Text style={{fontSize:14}}>
            <Text>Are you sure you want to deactivate{'\n'} </Text>
            <Text>this service?</Text>
            </Text>
            </View>
            </View>
            
         </View>
      )
    
    }
    }


    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingBottom:10,
        //     alignItems: 'center',
        //    justifyContent: 'center',
          },
        })
    