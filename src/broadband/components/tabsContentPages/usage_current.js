import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import {Dialog, DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog';

import Deactivate from './../popups/deactivate'

export default class UsageCurrent extends Component {

    state = {
        text: '',
        text2: '',
        visible:false,
      };

      render() {

        const data   = [ {label:"International Roaming", amt:"$ 250", mob:"9876534561",},
        {label:"Dialer Tune Plan", amt:"$ 250", mob:"9876534561"},
       ];

        var productLoop= [];
          for(let i=0;i<data.length;i++){
              productLoop.push(
                <View key={i}>
                 <View style={{justifyContent: 'space-between',flexDirection: 'row',paddingBottom:10}}>
                  <View style={{width:100}}>
                    <Text>
                    <Text style={{fontSize: 15, color: '#696969',textAlign: 'left', }}>{data[i].label}</Text>
                    
                    </Text>
                  </View>
                  <View>
                  <Text>
                   
                    <Text style={{fontSize: 14, color: '#696969',textAlign: 'left', }}>{data[i].amt}</Text>
                  </Text>
                </View>
                <View>
                 <Text style={{fontSize: 14, color: '#696969',textAlign: 'left', }}>{data[i].mob}</Text>
                </View>

              <View>
                <TouchableOpacity

                  style={styles.button}
                  
                  onPress={() =>
                    this.setState({ visible: true })
                  }
                  underlayColor='#fff'
                  >
                  <Text style={styles.submitText}>DEACTIVATE</Text>

                  </TouchableOpacity>
              </View>
            </View>
      
            <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:-20,marginBottom:20 }}></View>
        
          </View>
              );
            }


      return (
          <ScrollView >
        <Dialog
        visible={this.state.visible}
        width={Math.round(Dimensions.get('window').width)-50}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
        footer={
            <DialogFooter>
            <DialogButton
              text="Cancel"
              onPress={() => {
                  this.setState({ visible: false });
              }}
           />
          <DialogButton
            text="Confirm"
            
            onPress={() => {
              this.setState({ visible: false });
            }}
          />
        </DialogFooter>
        }
      >

        <DialogContent>
           <Deactivate/>
        </DialogContent>
      </Dialog>

    <View style={{  backgroundColor: '#fff',padding:10,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        }, 
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8, height:Math.round(Dimensions.get('window').height)-100}}>
     
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
    
      button:{
    
        padding: 5,
        borderWidth: 1,
        borderColor: '#990012',
        marginBottom: 10,
        borderRadius:10,
        //color:'black',
        // backgroundColor: '#000099'
        
    },
    
    submitText:{
    
        padding:2,
        color:'#990012',
        textAlign:'center',
        fontSize:12,
        fontWeight:'normal',
    
    },
    
     
    
    });
    