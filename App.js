import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createDrawerNavigator} from 'react-navigation-drawer';
 import{ dashboard } from './src/components/dashboard';
import{ HomeScreen } from './src/components/home';
import{ LoginScreen } from './src/components/login';
import DrawerContainer from './src/navigators/drawer';

// class NavigationDrawerStructure extends Component {
//   //Structure for the navigatin Drawer
//   toggleDrawer = () => {
//     //Props to open/close the drawer
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           {/*Donute Button Image */}
//           <Image
//             source={require('./assets/drawer.png')}
//             style={{ width: 25, height: 25, marginLeft: 5 }}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }


// const First_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   First: {
//     screen: HomeScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Home',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const Second_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Second: {
//     screen: dashboard,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Dashboard',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const DrawerNavigatorExample = createDrawerNavigator({
//   //Drawer Optons and indexing
//   Screen1: {
//     //Title
//     screen: First_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Home',
//     },
//   },
//   Screen2: {
//     //Title
//     screen: Second_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Dashboard',
//     },
//   }
// });
 
// export default createAppContainer(DrawerNavigatorExample);

const AppNavigator = createStackNavigator({
 // Home: HomeScreen,
  Dashboard: dashboard,
  Login: LoginScreen
},
{
  headerMode: 'none',
  initialRouteName: 'Login',
}
);

// const DrawerNavigator = createDrawerNavigator({
//   // Home: HomeScreen,
//    Dashboard: dashboard,
//    Login: LoginScreen
//  },
// //  {
// //    headerMode: 'none',
// //    initialRouteName: 'Login',
// //  }
//  );


const AppContainer = createAppContainer(AppNavigator);

export default class demoApp extends React.Component {
  render() {
    return (
       <DrawerContainer />
    );
  }
}

