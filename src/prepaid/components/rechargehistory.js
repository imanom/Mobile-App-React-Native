import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
   import Constants from 'expo-constants';
   import { Header } from 'react-native-elements';
   import Dash from 'react-native-dash';
   import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import RechargeSlider from './tabsContentPages/recharge_slider';
import BarChart from './storeCharts/BarChart';
import HeaderComponent from './../../navigators/headerCode';

export class RechargeHistory extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        const month = [ "April", "May", "June", "July", "August", "September", "October"]
        const data   = [ 50, 10, 40, 95, 85, 35, 53 ]

        var productLoop= [];
        for(let i=month.length-1;i>=0;i--){
            productLoop.push(
                <View style={styles.slide1} key={i}>
                <View style={styles.title}>
                    <Text style={styles.text}>{month[i]}</Text>
                  </View>
                    <View>
          
                        <RechargeSlider/>
                        </View>
          
                    </View>
            );
        }
        
        return (
            <View style={styles.container}>
            <View >
     
       
     <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
        </View>
        <BarChart data={data} month={month}/>
        <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5,marginTop:40}} />

    
     <View style={{backgroundColor: '#DCDCDC', height: 20}} />

            <Swiper style={styles.wrapper} showsButtons showsPagination={false} 
            buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute',  left: 0, flex: 1, 
            paddingHorizontal: 10, paddingVertical: 10, 
            justifyContent: 'space-between', alignItems: 'flex-start'}}>


      {productLoop}
</Swiper>

</View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
      },
      iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 90
      },
    wrapper: {
        marginTop:30
    },
    slide1: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#fff'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
      },
      title:{
          alignItems:'center',

      }
     
    
    });

