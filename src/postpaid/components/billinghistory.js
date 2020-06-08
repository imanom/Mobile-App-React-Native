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
import POPaymentHistory from './paymentHistory';

export class POBillingHistory extends Component {

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
            ['My Plan', '','', '₹ 399'],
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
        const month = [ "April", "May", "June", "July", "August", "September", "October"]
        const data   = [ 50, 10, 40, 95, 85, 35, 53 ]
        const state = this.state;
        var productLoop= [];
        for(let i=month.length-1;i>=0;i--){
            productLoop.push(
                <View style={styles.slide1} key={i}>
                <ScrollView>
                <View style={styles.title}>
                    <Text style={styles.text}>{month[i]}</Text>
                </View>
                <View style={styles.container2}>
                    <Table borderStyle={{borderColor: 'transparent'}} style={{width:410,marginTop:0,padding:10}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text2}/>
                    <Rows data={state.tableData} textStyle={styles.text1}/>
                    </Table>
                    <View style={styles.container1}>
                    <Text style={{fontWeight:'bold',marginLeft:10}}>Total </Text>
                    <Text style={{fontWeight:'bold',marginLeft:150}}>₹ 2100 </Text>
                </View>
             
      </View>
      <TouchableOpacity

style={styles.button}
//  onPress={this.onLogin.bind(this)}
//onPress={this.onLogin()}
onPress={() =>
  this.props.navigation.push('POPaymentHistory')
}yColor='#fff'
>
<Text style={styles.submitText}>PAYMENT HISTORY</Text>

</TouchableOpacity>
             </ScrollView>
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
      container2: { flex: 1,  paddingTop: 20, backgroundColor: '#fff' },
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
        width:370,
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

