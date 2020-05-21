import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class AboutusScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image 
      source={require('../assets/icon_drawer_aboutus.png')}
      style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
      />
    )
  }

  render() {
    return (
      <SafeAreaView style={[styles.container0, { backgroundColor: '#00b49f' }]}>   
      <View style={styles.container5}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Image style={{ width: 50, height: 50,marginLeft:16,backgroundColor:"#00b49f"}}
                    source={require('../assets/btn_navbar_mobile.png')}
                  />
        </TouchableOpacity>
      
    </View>
    <Text style={{color:"black",backgroundColor: '#ffffff'}}>AboutusScreen</Text>
    </SafeAreaView>

    )
  }

}

export default AboutusScreen;

const styles = StyleSheet.create({
  container5: {
    backgroundColor: '#00b49f',
  },
});