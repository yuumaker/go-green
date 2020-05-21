import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,Switch} from "react-native";



const ActivityDetail = ({activity,navigation}) => {
    
    

    return(
        <View style={styles.act_pat}>
            <View style={styles.act_pat_left}>
                <Image
                    style={styles.act_img}
                    source={{
                        uri: activity.image
                    }}
                    />
                
            </View>
            <View style={styles.act_pat_right}>
                <Text style={styles.act_pat_text}>[{activity.genre}]</Text>
                <Text style={[styles.act_pat_text,{lineHeight:25}]}>{activity.content}</Text>
                <TouchableOpacity key={0} onPress={() => navigation.push('ActDetail',activity)}>
                    <View style={styles.act_btn}>
                        <Text style={{color:"white",textAlign:"center"}}>想了解更多！</Text>
                    </View>
                </TouchableOpacity>
            </View>
           
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    act_pat:{
        flexDirection:"row",
        backgroundColor:"#FEF0AB",
        height:200,
        marginBottom:10,
        marginLeft:15,
        marginRight:15,
        alignItems:"center",
        borderRadius:15
    },
    act_pat_left:{
        width:"38%"
    },
    act_pat_right:{
        width:"60%"
    },
    act_pat_text:{
        marginLeft:15,
        fontSize:18,
        marginBottom:5,
    },
    act_img:{
        width:120,
        height:150,
        marginLeft:20,
        borderRadius:5
    },
    act_btn:{
        height:35,
        backgroundColor:"#FFA000",
        marginLeft:50,
        marginRight:50,
        justifyContent:"center",
        borderRadius:35/2
    }

    });

export default ActivityDetail;