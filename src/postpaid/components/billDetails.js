import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
   import Constants from 'expo-constants';
   import { Header } from 'react-native-elements';
   import Dash from 'react-native-dash';
   import { Table, Row, Rows } from 'react-native-table-component';
   import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import RechargeSlider from './tabsContentPages/recharge_slider';
import BarChart from './storeCharts/BarChart';
import HeaderComponent from './../../navigators/headerCode';
import PORecharge from './recharge';
import POChangePlans from './changeplans';

export class POBillDetails extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Plan Details', 'Plan usage', 'Extra Usage','Billed Amount'],
          tableData: [
            ['Corporate Plan', '','', '₹ 399'],
             ['Data', '2GB/2GB','116 MB','₹ 53'],
             ['Voice', '50/250','116 MIN', '₹ 59'],
              ['SMS', '180/250', '0','₹ 0'],
               ['SubTotal', '','','₹ 2100'],
               ['Taxes', '','','₹ 75'],
               ['Previous\nOutsatanding', '','','₹ 0'],
               ['Late Fee', '','','₹ 0']
          ]
        }
      }
    

    render() {
        
        const state = this.state;
        
        
        return (
            <ScrollView style={styles.container}>
            <View >
     <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
        </View>
        <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
    
       
                <View style={styles.title}>
                    <Text style={styles.text}>November 2019</Text>
                </View>
                </View>
                <View style={styles.container2}>
                <View style={{paddingHorizontal:10,paddingTop:7,alignSelf:'flex-end',flexDirection: 'row'}}>
                <TouchableOpacity
                    
                    onPress={() =>
                    this.props.navigation.push('POChangePlans')
                    }yColor='#fff'
                    >
                    <Text style={{color:'#659ec7',fontSize:17,textDecorationLine:'underline'}}>Change Plan</Text>
                    </TouchableOpacity>
                </View>
                    <Table borderStyle={{borderColor: 'transparent'}} style={{width:410,padding:20}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text2}/>
                    <Rows data={state.tableData} textStyle={styles.text1}/>
                    </Table>
                    <View style={styles.container1}>
                    <Text style={{fontWeight:'bold',marginLeft:10}}>Total </Text>
                    <Text style={{fontWeight:'bold',marginLeft:150}}>₹ 2100 </Text>
                </View>
             
      </View>
      <View style={{  backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      alignItems:'center',
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>
      <TouchableOpacity

style={styles.button}
//  onPress={this.onLogin.bind(this)}
//onPress={this.onLogin()}
onPress={() =>
  this.props.navigation.push('PORecharge', {name:'Work',num:'0805674321'})
}yColor='#fff'
>
<Text style={styles.submitText}>PAY NOW</Text>

</TouchableOpacity>
            
</View>

      

     <View style={{backgroundColor: '#DCDCDC', height: 50}} />

            
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
      },
      container2: { flex: 1, backgroundColor: '#fff' },
      container1:{
        flexDirection:'row',
        marginTop:-10,
        // marginLeft:-30,
        justifyContent:'space-around',
        fontWeight:'bold',
        backgroundColor:'#FBE6ED',
        height:80,
        paddingBottom:20,
        paddingTop:20,
        
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
      text1: { margin: 6,textAlign:'center' },
      text2: { margin: 6,textAlign:'center',fontWeight:'bold' },
       
      button:{
    
        padding: 8,
        width:350,
        borderWidth: 1,
        borderColor: '#659ec7',
        margin: 10,
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

