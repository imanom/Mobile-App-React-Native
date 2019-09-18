import React, { Component } from 'react';
import { Alert, Button, ImageBackground,TextInput, View, StyleSheet,
    TouchableHighlight,TouchableOpacity,Text, Dimensions } from 'react-native';
import { Ionicons,AntDesign,Feather,FontAwesome } from '@expo/vector-icons';

export class LoginScreen extends Component {

 constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

  }

  
  onLogin() {

    const { username, password } = this.state;
    
    //Alert.alert('Credentials', `${username} + ${password}`);
    this.props.navigation.navigate('Dashboard');
  }

  static navigationOptions = {
    drawerLockMode: 'locked-closed',
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="sign-in" style={{ fontSize: 24, color: tintColor }} />
  )
}

  render() {

    return (
        <ImageBackground source={require('./../../assets/Bg.jpg')} style={{width: '100%', height: '100%', flex:1}}>
    
     
      <View style={styles.container}>
       

       <View style={{ flex:2}}></View>

       <View style={{ flex:3,backgroundColor: '#fff', padding: 25,borderRadius:20, }}>

          
            <Text style={styles.login}> Account Login </Text>
            
        <TextInput

          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
    
          placeholder={'Registered Mobile Number'}
          placeholderTextColor="#6b6b47"
          style={styles.input}

        />

        <TextInput

          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          placeholderTextColor="#6b6b47"
          secureTextEntry={true}
          style={styles.input}

        />

        <View style={{ height:25,backgroundColor: '#fff'}}></View>
        <TouchableOpacity

            style={styles.submit}
             onPress={this.onLogin.bind(this)}
            //onPress={this.onLogin()}
            underlayColor='#fff'
            >
            <Text style={styles.submitText}>Sign-in</Text>

        </TouchableOpacity>
        </View>
        <View style={{ flex:3,backgroundColor: '#fff'}}></View>
      </View>
      </ImageBackground>

    );

  }

}

 

const styles = StyleSheet.create({

  submit:{
    // width:100,
    // marginTop:10,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 250,
    //height: 50,
    padding: 10,
    
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius:20,
    //color:'black',
    backgroundColor: '#000099'
    
},

submitText:{

    padding:2,
    color:'#fff',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
    // backgroundColor:'#68a0cf',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#fff'

},

login :{

  fontSize:25,
  fontWeight:'bold',
  //marginBottom:100,
  color: '#000099',
  paddingBottom:45,
  textAlign: 'center',
  //padding:20

},

 

  container: {

    flex: 1,
  //  flexDirection: 'row',
     alignItems: 'center',
    // justifyContent: 'center',
    //backgroundColor: '#ccccff',
   // backgroundColor: '#fff',
  },

  input: {

    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    //marginTop: 15,
    borderRadius:20,
    color:'black'

  },

});