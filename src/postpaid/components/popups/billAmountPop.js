import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class SetUsageLimitComp extends Component {
   
      render() {
       
      return (
        <View style={{paddingTop:10}}>
        <View style={styles.container}>
        <View>
            <Text style={{fontSize:25}}>Set Data Limit </Text>
        </View>
        <View>
            <Text>
            <FontAwesome name="close" size={24} color="#605e69" />
            </Text>
        </View>
        </View>
            <View style={{ backgroundColor: '#D3D3D3', height:1,marginHorizontal:5,marginVertical:10 }}></View>
            <View style={styles.container}>
            <View>
            <Text>Benefits </Text>
            </View>
            <View>
            <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
            <Text>
            
            <Text>7.70 core TT</Text>
            </Text>
            </View>
            </View>
            <View style={styles.container}>
            <View>
            <Text>Price </Text>
            </View>
            <View>
            <Text>
            <Text>$ 10</Text>
            </Text>
            </View>
            </View>
            <View style={styles.container}>
            <View>
            <Text>Type </Text>
        </View>
            <View>
            <Text>
           
            <Text> Talktime</Text>
            </Text>
            </View>
            </View>
            <View style={styles.container}>
            <View>
            <Text>Talktime </Text>
        </View>
            <View>
            <Text>
           
            
            <Text>$ 7.7</Text>
            </Text>
            </View>
            </View>
            <View style={styles.container}>
            <View>
            <Text>Validity </Text>
        </View>
            <View>
            <Text>
           
            <Text> NA</Text>
            </Text>
            </View>
            </View>
            <View style={styles.container}>
            <View>
            <Text>Access Fee </Text>
        </View>
            <View>
            <Text>
           
            <Text>$ 1</Text>
            </Text>
            </View>
            </View>
            <View style={styles.container}>
            <View>
            <Text>Service Tax </Text>
        </View>
            <View>
            <Text>
            
            <Text>$ 15</Text>
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
            paddingBottom:10
          },
        })
    