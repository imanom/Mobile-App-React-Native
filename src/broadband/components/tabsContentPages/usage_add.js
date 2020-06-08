import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import {Dialog, DialogContent, DialogButton, DialogFooter } from 'react-native-popup-dialog';
// import Dialog from "react-native-dialog";

import Activate from './../popups/activate'


export default class UsageCurrent extends Component {

   
    state = {
        text: '',
        text2: '',
        visible:false,
        prev:-1,
        curr:-1,
        k: [],
        showView: true,
        temp: -1
      };

      removeView(){
        data = data.splice(this.state.id,1);
        // this.state.showView[this.state.id] = false;
        // this.setState({
        //   showView: this.state.showView,
        // });
     }

      render() {
       
        var data   = [ {label:"International Roaming1", amt:"$ 250", mob:"9876534561",k:"100",hidden:false},
        {label:"International Roaming2", amt:"$ 250", mob:"9876534561",k:"101",hidden:false},
        {label:"International Roaming3", amt:"$ 250", mob:"9876534561",k:"102",hidden:false},
        {label:"International Roaming4", amt:"$ 250", mob:"9876534561",k:"103",hidden:false},
        {label:"International Roaming5", amt:"$ 250", mob:"9876534561",k:"104",hidden:false}
       ];

        var productLoop= [];
        // if(this.state.prev<this.state.curr){
        //    for(let i =0; i<this.state.k.len;i++){
        //      if(this.state.k==data[i].k){}
        //    }
        // }
        
                
        //productLoop = productLoop.splice(this.state.id,1);
          for(let i=0;i<data.length;i++){
           
              for(let j =0; j<this.state.k.length;j++){
                if(this.state.k==data[i].k){
                    data[i].hidden=true;
                }
              }
           
          }
          for(let i=0;i<data.length;i++){
           if(data[i].hidden==false){
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
                  //  onPress={this.onLogin.bind(this)}
                  //onPress={this.onLogin()}
                  onPress={() =>{
                   
                    this.setState({ visible: true, id: i, temp: data[i].k,showView: true });
                  }}
                  underlayColor='#fff'
                  >
                  <Text style={styles.submitText}>ACTIVATE</Text>

                  </TouchableOpacity>
              </View>
            </View>
      
            <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:-20,marginBottom:20 }}></View>
        
          </View>
              );
            }
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
                    this.setState({ visible: false, id:-1, temp: -1, showView:true });
                   // this.data[this.state.id].hidden = false
                }}
             />
            <DialogButton
              text="Activate"
              
              onPress={() => {
                this.state.k.push(this.state.temp);
                this.setState({ visible: false,showView:false, k: this.state.k, curr: 1 });
                // this.removeView();
                //this.data = data.splice(this.state.id,1);
                
                //this.productLoop = productLoop.splice(this.state.id,1);
              }}
            />
          </DialogFooter>
        }
      >

        <DialogContent>
           <Activate/>
        </DialogContent>
      </Dialog>

      
       
    <View style={{  backgroundColor: '#fff',padding:10,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        }, 
        shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,height:Math.round(Dimensions.get('window').height)-100}}>
     
     

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
        borderColor: '#659ec7',
        marginBottom: 10,
        borderRadius:10,
        //color:'black',
        // backgroundColor: '#000099'
        
    },
    
    submitText:{
    
        padding:2,
        color:'#659ec7',
        textAlign:'center',
        fontSize:12,
        fontWeight:'normal',
    
    },
    
     
    
    });
    