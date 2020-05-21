import React, { Component,Fragment } from "react";
import {
  Text,
  StatusBar,
  Button,
  StyleSheet,
  Platform,
  API,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import SafeView from 'react-native-safe-area-view';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

const HomeScreen = ({navigation}) => {
    
    return (
      <Fragment>
        <SafeView style={{ backgroundColor: '#7FB134' }}/>
        <ImageBackground source={require('../image/img_background.png')} style={styles.background_image} >
          
          <View style={styles.header}>
            <Text style={styles.header_text}>今天, 我要丟＿＿</Text>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity >
              <Image source={require('../image/btn_trash.png')} style={styles.home_btn}/>
            </TouchableOpacity>

            <View style={styles.btn_top}>
              <TouchableOpacity >
              <Image source={require('../image/btn_search.png')} style={[styles.home_btn]}/>
              </TouchableOpacity>
              <View style={{marginRight:20}}></View>
              <TouchableOpacity onPress={() => navigation.push('Detail')}>
                <Image source={require('../image/btn_recycle.png')} style={styles.home_btn}/>
              </TouchableOpacity>
            </View>

              <Image source={require('../image/img_logo.png')} style={[styles.home_btn,{marginTop:-70}]}/>
            
            <View style={styles.btn_bottom}>
              <TouchableOpacity >
                <Image source={require('../image/btn_furniture.png')} style={[styles.home_btn]}/>
              </TouchableOpacity>
              <View style={{marginRight:20}}></View>
              <TouchableOpacity >
                <Image source={require('../image/btn_food.png')} style={styles.home_btn}/>
              </TouchableOpacity>
            </View>

            <TouchableOpacity >
              <Image source={require('../image/btn_cloth.png')} style={[styles.home_btn,{marginTop:-70}]}/>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* <Image source={require('../image/img_background4.png')} style={styles.background_image}/> */}
        
        
        
      </Fragment>  

    )
  }



export default HomeScreen;

const styles = StyleSheet.create({
  
  
  background_image:{
    flex: 1,
    
    // justifyContent: 'center',
    // alignItems: 'center',
    width:"100%"
  },
  header:{
    
    height:"12%",
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom:60
  },
  header_text:{
    color:"white",
    
    fontSize:24,
    letterSpacing:2,
    justifyContent:"flex-start",
    alignSelf:"flex-start"
  },
  home_btn:{
    width:160,
    height:160,
    alignSelf:"center",
  },
  btn:{
    alignSelf:"center",
    justifyContent:"center"
  },
  btn_top:{
    flexDirection:"row",
    marginTop:-70,
    alignSelf:"stretch"
  },
  btn_bottom:{
    flexDirection:"row",
    marginTop:-70,
    alignSelf:"stretch"
  }
});