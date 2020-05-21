import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class UserScreen extends Component {
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image 
      source={require('../assets/icon_drawer_setting.png')}
      style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
      />
    )
  }

  render() {
    return (
      <View style={{flex:1}}>
    <SafeAreaView style={{ backgroundColor: '#7FB134' }}/>
    <ImageBackground source={require('../image/img_user_background.png')} style={{flex: 1,width:"100%",height:"100%"}} >
  
      <View style={styles.header5}>
          
          <Text style={styles.header_text5}>綠色使者</Text>
          
          
      </View>

      <View style={styles.trashcanbox}>
        <Text style={styles.trashcan_text}>我的點數</Text>
        <Image source={require('../image/img_trashcan.png')} style={styles.trashcan}/>
      </View>

      <View style={styles.history}>
        <Text style={styles.history_text}>有興趣的活動</Text>
        <View style={styles.history_1}>
          <Text style={styles.history_text}>[連署] 世界海洋日 救救海龜</Text>
          <TouchableOpacity>
            <Image source={require('../image/btn_history_close.png')} style={{width:15,height:15,margin:2.5}}/> 
          </TouchableOpacity>
          </View>
        
        <View style={styles.history_1}>
          <Text style={styles.history_text}>[志工] 春季淨灘一日體驗</Text>
          <TouchableOpacity>
            <Image source={require('../image/btn_history_close.png')} style={{width:15,height:15,margin:2.5}}/>
          </TouchableOpacity>
          </View>
      </View>

      <View style={{flexDirection:"row",justifyContent:"center"}}>
        <TouchableOpacity>
          <View style={styles.user_btn}>
            <Text style={styles.user_btn_text}>修改資料</Text>
          </View>
        </TouchableOpacity>
        <View style={{width:30}}></View>
        <TouchableOpacity>
          <View style={styles.user_btn}>
            <Text style={styles.user_btn_text}>登出</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.delete}>
        <TouchableOpacity>
          <Text style={styles.delete_text}>註銷帳號</Text>
        </TouchableOpacity>
      </View>
      
    
    
  </ImageBackground>
</View>
      

    )
  }

}

export default UserScreen;

const styles = StyleSheet.create({
  header5:{
    flexDirection:"row",
    height:"12%",
    marginBottom:120,
    justifyContent:"center",
    alignSelf:"center"
  },
  header_text5:{

    color:"white",
    fontSize:24,
    letterSpacing:2,
    justifyContent:"center",
    alignSelf:"center"
  },
  trashcan_text:{
    fontSize:18,
    color:"#587BAA"
  },
  trashcanbox:{
    alignItems:"center",
    marginBottom:60
  },
  trashcan:{
    width:280,
    height:90,
    margin:20
  },
  history:{
    justifyContent:"center",
    alignSelf:"center",
    marginBottom:50
  },
  history_text:{
    fontSize:18,
    width:280,
    color:"#587BAA",
    marginBottom:30
  },
  history_1:{
    flexDirection:"row",
  },
  user_btn:{
    backgroundColor:"#FDD510",
    width:160,
    height:50,
    borderRadius:50/2,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
  },
  user_btn_text:{
    fontSize:20,
    fontWeight:"500",
    textAlign:"center",
  },
  delete_text:{
    fontSize:18,
    color:"#587BAA",
    textDecorationLine:"underline"
  },
  delete:{
    alignItems:"center",
    marginTop:20
  }
});