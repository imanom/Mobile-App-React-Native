import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import ToggleSwitch from 'toggle-switch-react-native';

export default class SetUsageLimitComp extends Component {
    state = {
        text: '',
        text2: '',
        visible: false,
        isOnDefaultToggleSwitch: false,
      };
      
      render() {
       
      return (
        <View style={{paddingTop:10}}>
        <View style={styles.container}>
        <View>
            <Text style={{fontSize:20,color:'#605e69'}}>Set Usage Limit </Text>
        </View>
        {/* <View>
            <Text>
            <FontAwesome name="close" size={24} color="#605e69" />
            </Text>
        </View> */}
        </View>
            <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:5,marginVertical:10 }}></View>
            <View style={styles.container}>
           
            <View>
            <TextInput

                value={this.state.text2}
                onChangeText={text2 => this.setState({ text2 })}
                keyboardType={'numeric'}
                placeholder={'Enter Limit'}
                placeholderTextColor="#A9A9A9"
                style={styles.input2}

                />
            <Text></Text>
            
          
            </View>
            <View>
            <View style={{justifyContent: 'space-between',flexDirection: 'row',}}>
            <ToggleSwitch
          label="MB"
          isOn={this.state.isOnDefaultToggleSwitch}
          onColor="blue"
          offColor="gray"
          labelStyle={{ color: "black",fontSize:16, fontWeight: "900" }}
          size="medium"
          onToggle={isOnDefaultToggleSwitch => {
            this.setState({ isOnDefaultToggleSwitch });
            //this.onToggle(isOnDefaultToggleSwitch);
          }}
        />
        
        <Text style={{color: "black", fontWeight: "900", fontSize:17, marginHorizontal: 10 }}> GB</Text>
        </View>
            </View>
         </View>
         <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:5,marginVertical:10 }}/>
         </View>

      )
    
    }
    }


    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingBottom:10,
            paddingHorizontal:10
          },
          input2: {

          
            justifyContent: 'flex-start', alignItems: 'center',
            padding: 5,
            //flex:0.5,
            borderWidth: 1,
            borderBottomColor: '#A9A9A9',
            borderTopColor: '#fff',
            borderRightColor: '#fff',
            borderLeftColor: '#fff',
        
            color: 'black'
        
          },
        })
    