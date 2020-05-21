import React, { Component,Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Modal,
  Picker
} from "react-native";

import clockData from "../json/clock.json";
import ClockDetail from "./ClockDetail";

import { Dropdown } from 'react-native-material-dropdown';
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class TrashDetailScreen extends Component {
  
    constructor(){
        super();
        this.state={
            show:false,
            toggle:false,
            toggleinfo1:false,
            toggleinfo2:false,
            toggleinfo3:false,
            btn_text:"立體類",
            day_text:"回收日:每周二、四、六",
            picker_value :"請先選擇種類",
            picker_value2 :"請先選擇種類",
            picker_value3 :"請先選擇種類"
        }
    }

    _onPress1(){
        const newState = !this.state.toggle;
        this.setState({toggle:newState});
        this.setState({toggleinfo1:newState});
        this.setState({btn_text:"立體類"});
        this.setState({day_text:"回收日 : 每周二、四、六"});
      }

    _onPress2(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState});
    this.setState({toggleinfo2:newState});
    this.setState({btn_text:"平面類"});
    this.setState({day_text:"回收日 : 每周一、三、六"});
    }

    _onPress3(){
    const newState = !this.state.toggle;
    this.setState({toggle:newState});
    this.setState({toggleinfo3:newState});
    this.setState({btn_text:"其他類"});
    this.setState({day_text:"回收日 : 每周五"});
    }

    _onPressback(){
        const newState = !this.state.toggle;
        this.setState({toggle:newState});
        this.setState({toggleinfo1:false});
        this.setState({toggleinfo2:false});
        this.setState({toggleinfo3:false});
        }
    
    

  render() {
    const {toggle,btn_text,day_text,picker_value,picker_value2,picker_value3,toggleinfo1,toggleinfo2,toggleinfo3} = this.state;
    const buttonBg = toggle?"#FF8383":"#FFDADA";
    const fontcolor = toggle?"white":"black";
    const showbtn1 = toggle?"none":"block";
    const showbtn11 = toggle?"block":"none";
    const showtext1 = toggle?"block":"none";
    const showselectedinfo1 = toggleinfo1?"block":"none";
    const showselectedinfo2 = toggleinfo2?"block":"none";
    const showselectedinfo3 = toggleinfo3?"block":"none";

    let data1 = [
        {
            label:"一般類資源物",
        value: "回收管道:\n送交本局回收車\n\n包紮要領:\n(1) 鐵、鋁、銅等材質物品，回收時請去除非金屬物。\n(2) 各類瓶罐、容器盒以水略加清洗，並盡可能壓扁。\n(3) 各式容器空罐，請先去除吸管 。\n(4) 點滴瓶須先去除針、管部份，僅收瓶身。\n(5) 瓦斯罐、殺蟲劑，內容物須用盡以免發生危險。",
        data:"what"
        }, 
        {
            label:"乾淨保麗龍",
        value: '包紮要領：\n（１）內有竹筷、衛生紙等需清除。\n（２）將食物殘渣清理乾淨後，再以用過  之餐巾紙擦拭即可。\n（３）層疊捆綁或壓縮捆綁。\n（４）與保麗龍緩衝材分開打包。',
        data:"what2"
        }];
    let data2 = [
        {
            label:"各種乾淨舊衣物",
        value: "包紮要領：\n將舊衣物折疊以繩索捆綁妥當送交回收管道。\n\n不可回收：\n地毯、踏墊、浴巾、毛巾、帽子、棉被、枕頭、床單、床罩、內衣褲、布料(含碎布)、鞋類、襪子、窗簾、桌布、圍裙及泡水、髒汙、破舊、發臭等不具回收價值之舊衣。\n\n＊棉被、地毯無法裝入超大型專用袋者，以大型廢棄物方式處理。與各區清潔隊電話約定時間清運。",
        data:"what"
        }, 
        {
            label:"廢紙類",
        value: '包紮要領：\n先去除塑膠包覆封面、外封套、釘針，並鋪平疊好，再加以捆綁或裝袋。\n\n不可回收：\n塑膠光面廢紙、複寫紙、護貝及離心紙（貼紙底襯）、衛生紙(棉)、紙尿褲(片)。沾油漬、湯汁、血水等塑膠袋、複合材質塑膠袋（餅乾、零食之包裝袋）。',
        data:"what2"
        },
        {
            label:"塑膠袋類",
        value: '包紮要領：\n（１）不可沾有油脂或異物。\n（２）倒除內部水份及物品。\n（３）每袋鋪平疊好，並加以捆綁。',
        data:"what2"
        },
        {
            label:"舊書",
        value: '包紮要領：\n（１）與其它廢紙分開包紮後攜出。\n（２）200本以上與各區清潔隊約定時間收受。',
        data:"what2"
        }
        ];
    let data3 = [
        {
            label:"照明光源燈管、電池",
        value: "回收種類：\n（１）各式燈管(冷陰極燈、感應式螢光燈、其他含汞燈)，各式燈泡、HID燈、乾電池、行動電源、環境衛生用藥廢容器、光碟片、水銀體溫計、潤滑油、食用油。 ＊請確實包裝並分開攜出\n（２）其他類：廢行李箱2只(含)以下、廢安全帽、廢雨傘、廢獎盃(座)及長柄掃具。",
        data:"what"
        }, 
        {
            label:"堆肥廚餘類",
        value: '分類原則：\n（１）無法食用之有機資材。例：果皮、食材外殼、骨頭、果核、花材、樹葉、茶渣、咖啡渣及混雜無法供豬隻食用已酸臭腐敗之食材。\n＊椰子殼、榴槤殼請另收集後送交回收車\n＊衛生紙請以一般垃圾處理',
        data:"what2"
        },
        {
            label:"養豬廚餘類",
        value: '分類原則：\n家中不再食用的食物、食材，只要煮熟後豬可以吃的，不論生、熟均可。例：肉類、內臟、蔬菜、水果、冷凍食品及過期但尚未腐敗之食材、調味料。',
        data:"what2"
        }];


        
    return (
    <View style={{height:570}}>
    <ScrollView style={styles.trash_content}>
        <Text style={styles.trash_text}>資源回收</Text>
        <View style={styles.trash_select}>
            <TouchableOpacity onPress={() => this._onPress1()}>
                <View style={[styles.trash_btn_box,{display:showbtn1}]}><Text style={[styles.trash_btn]}>立體類</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._onPress2()}>
                <View style={[styles.trash_btn_box,{display:showbtn1}]}><Text style={[styles.trash_btn]}>平面類</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._onPress3()}>
                <View style={[styles.trash_btn_box,{display:showbtn1}]}><Text style={[styles.trash_btn]}>其他類</Text></View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{this.setState({show:true})}}>
                <View style={{display:showbtn1}}><Image source={require('../image/btn_info.png')} style={[styles.trash_btn_information]}/></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this._onPressback()}>
                <View style={[styles.trash_btn_box,{backgroundColor:buttonBg,borderColor:buttonBg,display:showbtn11}]}><Text style={[styles.trash_btn,{color:fontcolor}]}>{btn_text}</Text></View>
            </TouchableOpacity>
            
            <View style={[{display:showtext1}]}>
                <Text style={styles.day_text}>{day_text}</Text>
            </View>
            
            <Modal
            transparent={true}
            visible={this.state.show}
            >
                <View style={styles.info_modal}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Image source={require('../image/img_info_modal.png')} style={{width:30,height:30,margin:15,marginLeft:0}}/>
                        <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
                        <Image source={require('../image/btn_info_modal_close.png')} style={{width:20,height:20,margin:20}}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Text style={styles.info_modal_text}>
                        一、平面類：{"\n"}
                        （一）各種乾淨舊衣物 {"\n"}
                        （二）廢紙類 {"\n"}
                        （三）塑膠袋類 {"\n"}
                        （四）舊書 {"\n"}{"\n"}
                        二、立體類： {"\n"}
                        （一）一般類資源物{"\n"}
                         （二）乾淨保麗龍 {"\n"}{"\n"}
                         三、 其他類： {"\n"}
                         （一）照明光源燈管、電池、廢油及其他類 {"\n"}
                         （二）堆肥廚餘類{"\n"}{"\n"}
                        </Text>
                    </ScrollView>
                    
                </View>
            </Modal>

            
        </View>
        
        <View style={{display:showselectedinfo1}}>
            <Dropdown
                label='丟的是什麼呢？'
                data={data1}
                style={styles.dropdown}
                baseColor="#FF8383"
                textColor="#FF8383"
                selectedItemColor="black"
                containerStyle={{
                    width:200,
                    borderRadius:10,
                    height:"auto",
                    
                }}
                pickerStyle={{
                    width:200,
                    backgroundColor:"#FFDADA",
                    height:"auto",
                    marginLeft:18,
                }}
                onChangeText= {value => this.setState({picker_value:value})}
            />
            <View style={styles.selected_info}>
            <Text style={styles.selected_info_text}>{picker_value}</Text>
            </View>
        </View>

        <View style={{display:showselectedinfo2}}>
            <Dropdown
                label='丟的是什麼呢？'
                data={data2}
                style={styles.dropdown}
                baseColor="#FF8383"
                textColor="#FF8383"
                selectedItemColor="black"
                containerStyle={{
                    width:200,
                    borderRadius:10,
                    height:"auto",
                    
                }}
                pickerStyle={{
                    width:200,
                    backgroundColor:"#FFDADA",
                    height:"auto",
                    marginLeft:18
                }}
                onChangeText= {value => this.setState({picker_value2:value})}
            />
            <View style={styles.selected_info}>
            <Text style={styles.selected_info_text}>{picker_value2}</Text>
            </View>
        </View>

        <View style={{display:showselectedinfo3}}>
            <Dropdown
                label='丟的是什麼呢？'
                data={data3}
                style={styles.dropdown}
                baseColor="#FF8383"
                textColor="#FF8383"
                selectedItemColor="black"
                containerStyle={{
                    width:200,
                    borderRadius:10,
                    height:"auto",
                    
                }}
                pickerStyle={{
                    width:200,
                    backgroundColor:"#FFDADA",
                    height:"auto",
                    marginLeft:18
                }}
                onChangeText= {value => this.setState({picker_value3:value})}
            />
            <View style={styles.selected_info}>
            <Text style={styles.selected_info_text}>{picker_value3}</Text>
            </View>
        </View>
        
        <View style={styles.map_box}>
            <Text style={styles.map_text}>最近的回收車</Text>
            <ImageBackground source={require('../image/img_trash_map.png')} style={{flex: 1,width:360,height:360}}>
                
            </ImageBackground>
        </View>
    </ScrollView>
    </View>

    )
  }

}

export default TrashDetailScreen;

const styles = StyleSheet.create({
    selected_info:{
        height:"auto",
        width:350,
        backgroundColor:"#FFF3B8",
        padding:20,
        borderRadius:20
    },
    selected_info_text:{
        fontSize:16,
        lineHeight:30
    },
    info_modal:{
        marginTop:310,
        alignSelf:"center",
        width:350,
        height:350,
        borderRadius:20,
        backgroundColor:"#7FB134",
        opacity:0.92,
        paddingLeft:20
        
    },
    info_modal_text:{
        color:"white",
        fontSize:18,
        lineHeight:30
    },
    day_text:{
        fontSize:18,
      textAlign:"center",
      padding:12
    },
    trash_content:{
        marginLeft:"6%",
        marginTop:60,
        height:200
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
    },
    map_text:{
        fontSize:16,
        marginBottom:20
    },
    map_box:{
        marginTop:50
    }
    
});