import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons, AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class EmailPopComp extends Component {

    render() {

        return (

            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop:20,fontSize: 20 }}>Do you want to send this bill to</Text>
                <TextInput
                    style={{marginTop:30,marginBottom:30, height: 40, borderColor: 'black', borderWidth: 1,width: 300,paddingLeft:5,paddingRight:5}}
                    multiline={false}
                    autoCompleteType='email'
                    clearButtonMode='always'
                    placeholder='john.doey@email.com'
                />
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10
    },
})
