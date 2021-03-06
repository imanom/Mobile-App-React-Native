import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
   import Constants from 'expo-constants';
   import { Header } from 'react-native-elements';
   import Dash from 'react-native-dash';
   import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import { Table, Row, Rows } from 'react-native-table-component';
import Swiper from 'react-native-swiper';
import { Dialog, DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog';
import PieComponent from './../storeCharts/pieChart';
import BarChart from './../storeCharts/BarChart';
import POPlans from './../plans';
import SetUsageLimitComp from './../popups/setUsageLimit';


export default class UsageHistData extends Component {


    constructor(props) {
        super(props);
            this.state = {
            tableHead: ['Date/Time',  'Duration', 'Usage'],
            tableData: [
                ['15th, 17:11', '3:20','120 MB'],
                ['16th, 11:11',  '5:40','96 MB'],
                ['17th, 02:11',  '2:22','100 MB'],
                ['18th, 13:11', '3:00','73 MB'],
                ['19th, 17:12',  '3:40','110 MB']
                ],
                text: '',
                text2: '',
                visible: false
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
                <ScrollView>
                <View style={styles.title}>
             <Text style={styles.text}>{month[i]}</Text>
             </View>
             <View style={styles.container2}>
             <PieComponent text1="300MB/ 1GB" text2="data used"/> 
             <View style={{width:350,justifyContent: 'space-between',flexDirection: 'row',paddingTop:10}}>
             <TouchableOpacity

                  onPress={() =>{
                   
                    this.setState({ visible: true });
                  }}
                  underlayColor='#fff'
                  >
             <View>
            <Text style={{fontSize: 15,textAlign: 'left', color: '#3399FF'}}>SET USAGE ALERT</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity

            //  onPress={this.onLogin.bind(this)}
            onPress={() =>
              this.props.nav.push('POPlans')
            }
            underlayColor='#fff'
            >
            <View>
            <Text style={{fontSize: 15,textAlign: 'left', color: '#3399FF'}}>SUBSCRIBE PACKS</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5,marginTop:10,width:350,}} />
            <Table borderStyle={{borderColor: 'transparent'}} style={{width:380, marginTop:30}}>
            <Row data={state.tableHead} textStyle={styles.text2}/>
             <Rows data={state.tableData} textStyle={styles.text1}/>
           </Table>
         </View>
   </ScrollView>
           </View>
            );
        }


        return (


 <View style={styles.container}>
    
    <Dialog
          visible={this.state.visible}
          width={Math.round(Dimensions.get('window').width) - 100}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}

        >

          <DialogContent>
            
             <View>
             
              <SetUsageLimitComp/>
              <DialogButton
                text="Done"

                onPress={() => {
                  this.setState({ visible: false });
                }}
              />
            </View> 
          </DialogContent>
        </Dialog>
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
      container2: { flex: 1, padding: 16, backgroundColor: '#fff' },
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

