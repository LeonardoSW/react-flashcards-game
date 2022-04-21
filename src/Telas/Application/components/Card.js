import React from "react";
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, View, Image } from "react-native";

import image from '../../../../assets/MyCollectionImages/bola.png';
import edit from '../../../../assets/MyCollectionImages/lapis.png';
import remove from '../../../../assets/MyCollectionImages/excluir.png';


export default function Card (props){
    return (
        <SafeAreaView style = {styles.countainer}>
            <TouchableOpacity style = {styles.card}>
                <View style={styles.textCard}>
                    <Text style={styles.description}>Frente</Text>    
                    <Text style={styles.text}>{props.front}</Text>
                </View>
                
                <View style={styles.textCard}>
                    <Text style={styles.description}>Verso</Text>    
                    <Text style={styles.text}>{props.back}</Text>
                </View>
                
                <View style={styles.viewEdit}>
                    <Image style={styles.imageOptions} source={edit}/>
                    <Image style={styles.imageOptions} source={remove}/>
                </View>
            
            </TouchableOpacity>
        </SafeAreaView>
    )
}
/**/
const styles = StyleSheet.create({
    countainer:{
        marginTop: 15,
        height:70,
        marginHorizontal: "5%",
        backgroundColor: "#FFF",
        borderRadius: 15,
    },
    card:{
        height:"100%",
        width: "100%",
        //backgroundColor: "#FDA",
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'row',        
    },
    textCard:{
        //backgroundColor:"#FED",
        justifyContent:"flex-start",
        width: "30%",
    },
    description:{
        
        ///backgroundColor:"#abc",
        color:"#868686",
        marginLeft: 10,
    },
    text:{
        //backgroundColor:"#abc",
        width: "100%",
        
        fontSize: 25,
        marginLeft: 10,
        color: '#27aca7',
        fontWeight: 'bold'
    },
    viewEdit:{
        flexDirection: 'row',
        //backgroundColor:"#FDA",
        width:"33%",
        justifyContent:"flex-end"
    },
    imageOptions:{
        padding:20,
        width:30,
        height:30
    }

})