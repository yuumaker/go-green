import React, { Component,Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Switch,
  Modal
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

import flatListData from '../json/clock.json'

class ClockAdd extends Component {
  
    constructor(props){
      super(props);
    }

    showClockAdd = ()=> {
      this.refs.myModal.open();
    }
  render() {
    return (
      <Modal style={styles.clock_modal}
        ref={"myModal"}
        position="center"
        backdrop={true}
        onClosed={()=> {

          alert("closed!");
        }}
      >
        <Text style={{textAlign:"center"}}>Adding Clock</Text>
      </Modal>
      

    )
  }

}

export default ClockAdd;

const styles = StyleSheet.create({
  clock_modal:{
    justifyContent:"center",
    shadowRadius: 10,
    width: 300,
    height:200,
    backgroundColor:"black"
  }
});