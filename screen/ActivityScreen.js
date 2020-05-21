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

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

import activityData from "../json/clock.json";
import ActivityDetail from "./ActivityDetail";

const ActivityScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <SafeAreaView style={{ backgroundColor: '#7FB134' }}/>
    <ImageBackground source={require('../image/img_background.png')} style={{flex: 1,width:"100%",height:"100%"}} >
  
      <View style={styles.header4}>
          
          <Text style={styles.header_text4}>活動</Text>

          
      </View>

      
      <View style={styles.act_content}>
          <FlatList
            data={activityData.activityList}
            renderItem={({ item }) => <ActivityDetail activity={item} navigation={navigation}/>}
          keyExtractor={item => item.title}

          />
      </View>
    
    
  </ImageBackground>
</View>
    

  )
}



export default ActivityScreen;

const styles = StyleSheet.create({
  header4:{
    flexDirection:"row",
    height:"12%",
    marginBottom:55,
    justifyContent:"center",
    alignSelf:"center"
  },
  header_text4:{
    color:"white",
    fontSize:24,
    letterSpacing:2,
    justifyContent:"center",
    alignSelf:"center"
  },
  act_content:{
    height:"75%",
  }
});