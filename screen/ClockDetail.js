import React,{useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,Switch} from "react-native";



const MessageDetail = ({clock}) => {
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={styles.clock_pat}>
            <View style={styles.clock_pat_left}>

                <Text style={styles.clock_pat_text}>{clock.carname}</Text>
                <Text style={styles.clock_pat_text}>{clock.time}</Text>
                <Text style={styles.clock_pat_text}>{clock.address}</Text>
            </View>
            <View>
            <Switch
        trackColor={{ false: "#E9E9E9", true: "#7FB134" }}
        thumbColor={isEnabled ? "#FDD510" : "#FDD510"}
        ios_backgroundColor="#E9E9E9"
        style={{ transform:[{ scaleX: 1 }, { scaleY: 1 }] }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
            </View>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    clock_pat:{
        flexDirection:"row",
        backgroundColor:"#FFF8D3",
        height:120,
        marginBottom:20,
        marginLeft:15,
        marginRight:15,
        alignItems:"center",
        borderRadius:15
    },
    clock_pat_left:{
        width:"80%"
    },
    clock_pat_text:{
        marginLeft:15,
        fontSize:18,
        marginBottom:5,
    }

    });

export default MessageDetail;