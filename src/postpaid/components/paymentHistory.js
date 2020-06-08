import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import HeaderComponent from './../../navigators/headerCode';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export class POPaymentHistory extends Component {

    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <FontAwesome name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    state = {
        names: [
           {
              id: 0,
              name: '15th, 17:11',
              bank:'ICICI Netbanking',
              price:'$ 2000.39'
           },
           {
              id: 1,
              name: '15th, 17:11',
              bank:'ICICI Netbanking',
              price:'$ 200'
           },
           {
              id: 2,
              name: '15th, 17:11',
              bank:'ICICI Netbanking',
              price:'$ 56'
           },
           {
              id: 3,
              name: '15th, 17:11',
              bank:'ICICI Netbanking',
              price:'$ 5'
           }
        ],
        
     }
  
    render() {

        const month = [ "April", "May", "June", "July", "August", "September", "October"]
        var productLoop= [];
        for(let i=month.length-1;i>=0;i--){
            productLoop.push(
                <View key={i}>
                <ScrollView>
                <Text style={styles.header}>{month[i]}</Text>
                   {
                      this.state.names.map((item, index) => (
                         <View
                            key = {item.id}
                            style = {styles.container}
                           >
                           <Text style = {styles.text}>
                               {item.name}
                            </Text>
                            <Text style = {styles.text}>
                               {item.bank}
                            </Text>
                            <Text style = {styles.text}>
                               {item.price}
                            </Text>
                         </View>
                      ))
                   }
                   </ScrollView>
                </View>
            );
        }

        return (
            <ScrollView style={styles.container2}>
            <View >
     <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
        </View>

        {productLoop}

        </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    container2:{
        flex:1
    },
    container: {
       padding: 20,
       // marginTop: 3,
       // backgroundColor: '#d9f9b1',
       alignItems: 'center',
       borderBottomColor:'lightgrey',
       borderBottomWidth:1,
       flex:1,
       flexDirection:'row',
       justifyContent:'space-around'
    },
    text: {
       color: 'black'
    },
    header:{
      fontWeight:'bold',
      fontSize:25,
      padding:15,
      backgroundColor:'lightgrey',
 
    }
    
 })
 