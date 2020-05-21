import React, { Component,Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList
} from "react-native";

import clockData from "../json/clock.json";
import ClockDetail from "./ClockDetail";

import ClockAdd from "./Clocksadd";
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class ClockScreen extends Component {
  
    constructor(props){
      super(props);
      this.state = {

      };
    }

    _onPressed (){
      //alert("You add an item!");
      this.refs.addModal.showClockAdd();
    }

  render() {
    return (
      <Fragment>
      <SafeAreaView style={{ backgroundColor: '#7FB134' }}/>
      <ImageBackground source={require('../image/img_test.png')} style={{flex: 1,width:"100%",height:"100%"}} >
    
      <View style={styles.header3}>
          
          <Text style={styles.header_text3}>提醒</Text>
      </View>

      <View style={styles.clock_content}>
        <FlatList
          data={clockData.clockList}
          renderItem={({ item }) => <ClockDetail clock={item} />}
        keyExtractor={item => item.title}
        />

        {/* <ClockAdd ref={'addModal'} parentFlatlist={this}>

        </ClockAdd> */}
      </View>
      <View style={styles.clock_btn_box}>
        <TouchableOpacity >
            <Image source={require('../image/btn_clock_add.png')} style={[styles.clock_btn]}/>
        </TouchableOpacity>
      </View>
      
      
    </ImageBackground>
  </Fragment>
      

    )
  }

}

export default ClockScreen;

const styles = StyleSheet.create({
  header3:{
    flexDirection:"row",
    height:"12%",
    marginBottom:55,
    justifyContent:"center",
    alignSelf:"center"
  },
  header_text3:{
    color:"white",
    fontSize:24,
    letterSpacing:2,
    justifyContent:"center",
    alignSelf:"center"
  },
  clock_content:{
    height:"65%"
  },
  clock_btn_box:{
    height:60,
    alignItems:"center"
  },
  clock_btn:{
    backgroundColor:"#B0CBB3",
    height:60,
    width:200,
    borderRadius:60/2
  }
});