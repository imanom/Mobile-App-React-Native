import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View,StatusBar,ScrollView,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { Ionicons,AntDesign,Feather,FontAwesome } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import PieChart from 'react-native-pie-chart';
import Doughnut from './pieChart';

export class dashboard extends Component {

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

  render() {

    const chart_wh = 200

    const series = [1, 1, 2]

    const sliceColor = ['#CA226B','#FAE20A','#22AECA']

    

  return (
    <ScrollView>
      <View style={styles.header}>
     
      {/* <MyHeader navigation={props.navigation} title="Dashboard" /> */}
        <Header
        
          // leftComponent={{
          //   icon: 'menu',
          //   color: '#fff',
          //   //onPress: () => alert('ea'),
          // }}
          leftComponent={
            
          <Feather name="menu" size={25} color="#fff" onPress={() => this.props.navigation.openDrawer()}
          />
        }
        //  leftComponent={<HamburgerMenu navigation={props.navigation} />}
          centerComponent={{ text: 'Dashboard', style: { color: '#fff',fontSize: 20, fontWeight: 'bold'} }}
          rightComponent={
           // { icon: 'home', color: '#fff' }
           <AntDesign name="logout" size={20} color="#fff" onPress={() => this.props.navigation.goBack()} />
           
        }
          backgroundColor="#000099"
          
        />
      </View>
    <View style={{ height: 20, backgroundColor: '#fff'}}></View>

    <View style={{ height: 80, backgroundColor: '#fff',padding:20,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      }, 
      shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 8,}}>

    <Text style={{fontSize: 20,color: '#000',}}>
    <Text style={{fontWeight: 'bold'}}>Order Status:     </Text>
    <Text style={{fontSize: 17,color: '#605e69'}}>SUCCESS{'\n'}</Text>
   
    <Text style={{fontSize: 12}}>ID - 37745995</Text>
    </Text>
    </View>
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />

    <View style={styles.container}>
     
      <View style={{ height: 120, backgroundColor: '#03b1fc',flex: 1}} >
      <Text style={styles.textStyles}>
        
        <Text style={{fontSize: 40}}>399 </Text>
        <Text>plan{'\n'}</Text>
      
        <Text style={{fontSize: 12}}>Expires on 15 Nov, 2019</Text>

      </Text>
      
      </View>
      <View style={{ height: 120, backgroundColor: '#fff', width: 10}}></View>

      <View style={{height: 120, backgroundColor: '#b489c9',flex: 1}} >

      <Text style={styles.textStyles}>

        <Text style={{fontSize: 40}}>1.30 </Text>
        <Text>GB{'\n'}</Text>

        <Text style={{fontSize: 12}}>remaining of 1.5 GB{'\n'}</Text>
        <Text style={{fontSize: 12}}>renews in 13 hours</Text>
      </Text>
      </View>
     
    </View>
    
    <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5,}} />
    {/* <View style={{backgroundColor: '#fff', height: 20}} /> */}

    <View style={{ backgroundColor: '#dcd7de',padding:20}} >
    <Text style={{fontSize: 15,textAlign: 'center',paddingBottom:10}}>Current Plan Details</Text>
    <View style={styles.box} >
        <Text style={{fontSize: 25}}>MRP 399</Text>
        <Text style={{fontSize: 12, color:'#9b9a9c',paddingBottom:5}}>Expires on Nov 15, 2019, 02:30PM</Text>
        <FlatList
        style={styles.flist}
          data={[
            {key: 'SMS', value:'100 SMS/Day'},
            {key: 'Mobile Voice', value:'Unlimited'},
            {key: 'Data', value:'1.50 GB/Day'}
          ]}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({item}) => 
          <View style={styles.row}>

            <View style={styles.row_cell_timeplace}>
            <Text style={styles.item}>{item.key}</Text>
          </View>
          <Text style={styles.item2}>{item.value}</Text>

          </View>
        }
        />
     </View>
      </View>
      <View style={{borderBottomColor: '#9b9a9c',borderBottomWidth: 0.5}} />
      
      <Doughnut/>


     
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textStyles:{
    color: '#fff',
    //fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 10

  },
  box: {
    backgroundColor: '#fff',
    height: 230,
    padding:10,
    borderRadius: 15,
  },
  item: {
    flex:2,
    padding: 10,
    fontSize: 18,
    height: 40,
  },
  item2: {
    padding: 10,
    fontSize: 15,
    height: 40,
    flex:1,
    color: '#9b9a9c',
    textAlign: 'right',
    alignSelf: 'flex-end'
  },
  flist :{
    marginTop: 10,
    alignSelf: "stretch",
  },
  row: {
    
    flex: 1,
    flexDirection: 'row',  // main axis
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    
  },
  row_cell_timeplace: {
    flex: 1,
    flexDirection: 'column',
  },

header: {
  //flex: 1,
  //paddingTop: Constants.statusBarHeight,
  backgroundColor: '#0000FF',
},

});
