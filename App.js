import React, { Fragment } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image } from 'react-native'

import {createDrawerNavigator,DrawerItems,createBottomTabNavigator} from 'react-navigation'
import {NavigationContainer, TabActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StackNavigator,
} from 'react-navigation';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {creat}

import StackScreen from './screen/StackScreen'
import HomeScreen from './screen/HomeScreen'
import UserScreen from './screen/UserScreen'
import AboutusScreen from './screen/AboutusScreen'
import ActivityScreen from './screen/ActivityScreen'
import ClockScreen from './screen/ClockScreen'
import StackScreen2 from './screen/StackScreen2'
import { render } from 'react-dom';

//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){

  
  return (
    <View style={{flex:1}}>
      <MytabNavigator/>
    </View>
    
  );
}
}


const MytabNavigator = createBottomTabNavigator({
  "Home":{
    screen:StackScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_home.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      
    }
  },
  "My Book ":{
    screen:ClockScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_clock.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      title:" "
    },
    
  },
  "Favorites ":{
    screen:StackScreen2,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_activity.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      title:" "
    }
  },
  "User":{
    screen:UserScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
          source={require('./image/icon_user.png')}
          style = {{width:30 ,height:30,margin:0,justifyContent:"center",tintColor:tintColor}}
          />
      ),
      title:" "
    }
  }
},{
  initialRouteName: 'Home',
  
  tabBarOptions:{
    activeTintColor :'#FDD510',
    inactiveTintColor :'#FFFFFF',
    showLabel: false,
   labelStyle: {
    fontSize: 16,
    marginBottom:5
  },
   style:{
     margin:0,
     height:60,
     borderTopWidth:0,
     borderTopColor:'grey',
     backgroundColor:"#7FB134"
   }
  },
});


// const AppDrawerNavigator = createDrawerNavigator({
//   Home:MybookScreen,
//   "My Book":{
//     screen:MytabNavigator,
//     navigationOptions: {
//       drawerIcon : ({tintColor}) => (
//         <Image 
//         source={require('./assets/icon_drawer_mybook_pressed.png')}
//         style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
//         />
//       )
//     }
    
//   },
//   Favorites:FavoritesScreen,
//   Settings:SettingsScreen,
//   Aboutus:AboutusScreen
// },{
//   initialRouteName: 'My Book',
//   contentComponent:CustomDrawerComponent,
//   drawerWidth:335,
//   contentOptions:{
//     activeTintColor :'#ffffff',
//     inactiveTintColor :'#5c5c5c',

//    activeBackgroundColor :'#00b49f',
//    inactiveBackgroundColor :'#ebebeb',
   
//   },
//   index:2

// })



const styles = StyleSheet.create({
  
  userinfoStyle:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:20
  },
  userinfotextStyle:{
    color:"white",
    marginRight:120
  }
});
