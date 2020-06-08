import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
   import Constants from 'expo-constants';
   import { Header } from 'react-native-elements';
   import Dash from 'react-native-dash';
   import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import { Table, Row, Rows } from 'react-native-table-component';
import Swiper from 'react-native-swiper';
import BarChart from './../storeCharts/BarChart';

export default class UsageHistData extends Component {


    constructor(props) {
        super(props);
            this.state = {
            tableHead: ['Date/Time', 'Contact', 'Duration', 'Usage'],
            tableData: [
                ['15th, 17:11','9876534561', '3:20','120 MB'],
                ['16th, 11:11', '9876534674', '5:40','96 MB'],
                ['17th, 02:11', '9876534123', '2:22','100 MB'],
                ['18th, 13:11', '9876534897','3:00','73 MB'],
                ['19th, 17:12',  '9876534025','3:40','110 MB']
                ]
        }
    }
  
    
    render() {
        const state = this.state;
        const month = [ "April", "May", "June", "July", "August", "September", "October"]
        const data   = [ 50, 10, 40, 95, 85, 35, 53 ]

        var productLoop= [];
        for(let i=month.length-1;i>=0;i--){
            productLoop.push(
                <View style={styles.slide1} key={i}>
                <View style={styles.title}>
             <Text style={styles.text}>{month[i]}</Text>
             </View>
             <View style={styles.container2}>
           <Table borderStyle={{borderColor: 'transparent'}} style={{width:400}}>
            <Row data={state.tableHead} textStyle={styles.text2}/>
             <Rows data={state.tableData} textStyle={styles.text1}/>
           </Table>
         </View>
   
           </View>
            );
        }


        return (


 <View style={styles.container}>
    

        <BarChart data={data} month={month}/>
        <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5,marginTop:40}} />
        <View style={{backgroundColor: '#DCDCDC', height: 20}} />

<Swiper style={styles.wrapper} showsButtons showsPagination={false} buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute',  left: 0, flex: 1, 
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
      container2: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 90
      },
    wrapper: {
        marginTop:30
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
      },
      title:{
          alignItems:'center',

      },
      text1: { margin: 6,textAlign:'center', color:'#000' },
      text2: { margin: 6,textAlign:'center',fontWeight:'bold', color:'#000' },
       
     
    
    
    });

