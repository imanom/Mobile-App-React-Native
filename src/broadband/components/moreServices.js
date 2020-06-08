import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TextInput,View,StatusBar,ScrollView,Dimensions,
   ActivityIndicator,TouchableHighlight,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import Dash from 'react-native-dash';
import { Ionicons,AntDesign,Feather,FontAwesome,MaterialIcons } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
//import { LinearGradient } from 'expo-linear-gradient';
import UsageAdd from './tabsContentPages/usage_add';
import UsageCurrent from './tabsContentPages/usage_current';

import HeaderComponent from './../../navigators/headerCode';

export class BRMoreServices extends Component {
  
  

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#b489c9',
        height: 0.5,
      }}
    />
  );
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" style={{ fontSize: 24, color: tintColor }} />
    )
}

state = {
    text: '',
    text2: ''
  };


  render() {

    const { navigate } = this.props.navigation;

    
  return (
    <View style={styles.container}> 
      <View>
     <HeaderComponent routeName={this.props.navigation.state.routeName} nav={this.props.navigation}/>
        
        </View>
        
          <View style={styles.container}> 
        <ScrollableTabView
  
     tabBarUnderlineStyle={{backgroundColor:'#fff',height:2,}}

     initialPage={0}
     tabBarBackgroundColor={'#00005a'}
     tabBarActiveTextColor={'#fff'}
     tabBarInactiveTextColor={'#fff'}
     renderTabBar={() => <ScrollableTabBar />}
   >
     <View tabLabel='More Services' style={{flex:1}}> 
     <UsageAdd/>
     </View>
     <View tabLabel='Currently Running' style={{flex:1}}> 
    <UsageCurrent/>
     </View>
     
  </ScrollableTabView>
  </View> 
      
    

</View>
  );
}
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 90
      },
  container: {
    flex: 1
  },
 
  
 

});
