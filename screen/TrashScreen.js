import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

import TrashDetailScrenn from './TrashDetailScreen'

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 


const TrashScreen = ({navigation}) => {
  
 

  
    return (
        <Fragment>
            <SafeAreaView style={{ backgroundColor: '#7FB134' }}/>
            <ImageBackground source={require('../image/img_background.png')} style={{flex: 1,width:"100%"}} >
          
            <View style={styles.header2}>
                
                <Text style={styles.header_text2}>今天, 我要丟<Text style={{color:"#FDD510"}}>回收</Text></Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack('Home1')}>
                <Image source={require('../image/btn_back.png')} style={styles.trash_back}/>
            </TouchableOpacity>
            <TrashDetailScrenn></TrashDetailScrenn>
            
          </ImageBackground>
        </Fragment>
        

    );
  }



export default TrashScreen;

const styles = StyleSheet.create({
    header2:{
        flexDirection:"row",
        height:"12%",
        marginBottom:70,
        justifyContent:"center",
        alignSelf:"center"
      },
      header_text2:{
        color:"white",
        fontSize:24,
        letterSpacing:2,
        justifyContent:"center",
        alignSelf:"center"
      },
      trash_back:{
        width:70,
        height:50,
        marginTop:-110
      },
      trash_content:{
          marginLeft:"6%",
          marginTop:60
      },
      trash_text:{
        fontSize:24,
        marginBottom:15,
        fontWeight:"300"
      },
      trash_select:{
          flexDirection:"row",
          alignContent:"center",
          
      },
      trash_btn:{
        width:100,
        fontSize:18,
        textAlign:"center",
        marginRight:10,
        fontWeight:"300"
        
        // shadowOffset:{  width: 10,  height: 10,  },
        // shadowColor: 'black',
        // shadowOpacity: 1.0,
        
      },
      trash_btn_box:{
        backgroundColor:"#FFDADA",
        width:100,
        paddingTop:12,
        paddingBottom:12,
        borderRadius:10,
        borderWidth:2,
        borderColor:"#FFDADA",
        marginRight:5,
        //overflow: "hidden",

        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {
        height: 3,
        width: 4,
        },
      },
      trash_btn_information:{
        width:50,
        height:50,

        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {
        height: 3,
        width: 4,
        }
      }
});