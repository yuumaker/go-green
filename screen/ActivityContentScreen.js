import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,Switch,SafeAreaView,ImageBackground} from "react-native";
import { ScrollView } from "react-native-gesture-handler";



const ActivityContentScreen = ({route,navigation}) => {
    
    

    return(
    <View style={{flex:1}}>
        <SafeAreaView style={{ backgroundColor: '#7FB134' }}/>
        <ImageBackground source={require('../image/img_background.png')} style={{flex: 1,width:"100%",height:"100%"}} >
            <View style={styles.header6}>
                <Text style={styles.header_text6}>{route.params.genre}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack('Activity')}>
                <Image source={require('../image/btn_back.png')} style={styles.act_back}/>
            </TouchableOpacity>
                <View style={styles.actcont_pat}>
                    <ScrollView>
                        <View style={styles.act_scroll}>
                            <Image
                            style={styles.con_img}
                            source={{
                            uri: route.params.con_image
                            }}
                            />
                            <Text style={styles.actcont_title}>{route.params.con_title}</Text>
                            <Text style={styles.actcont_detail}>{route.params.con_detail}</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(route.params.con_uri)}>
                                <View style={styles.act_con_btn}>
                                    <Text style={{textAlign:"center",color:"white",fontSize:18}}>我有興趣！</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                        
                    </ScrollView>
                </View>
                
           
            
           
        </ImageBackground>
    </View>
        
        
    );
}

const styles = StyleSheet.create({
    header6:{
        flexDirection:"row",
        height:"12%",
        marginBottom:70,
        justifyContent:"center",
        alignSelf:"center"
      },
      header_text6:{
        color:"white",
        fontSize:24,
        letterSpacing:2,
        justifyContent:"center",
        alignSelf:"center"
      },
    act_back:{
        width:70,
        height:50,
        marginTop:-110
      },
    actcont_pat:{
        height:"80%",
        width:"95%",
        backgroundColor:"#FEF0AB",
        justifyContent:"center",
        alignSelf:"center",
        marginTop:-40,
        borderRadius:15
    },
    act_scroll:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
    },
    con_img:{
        width:350,
        height:250,
        margin:20,
        borderRadius:10
    },
    actcont_title:{
       fontSize:22,
       width:350, 
       marginBottom:20,
       fontWeight:"500"
    },
    actcont_detail:{
        fontSize:20,
        width:350, 
        marginBottom:20,
        lineHeight:30
     },
     act_con_btn:{
         backgroundColor:"#FF8383",
         width:120,
         height:50,
         borderRadius:50/2,
         justifyContent:"center",
         marginBottom:40
     }
    });

export default ActivityContentScreen;