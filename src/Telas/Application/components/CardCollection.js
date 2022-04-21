import React from "react";
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, View, Image } from "react-native";

import image from '../../../../assets/MyCollectionImages/bola.png';
import edit from '../../../../assets/MyCollectionImages/lapis.png';
import remove from '../../../../assets/MyCollectionImages/excluir.png';


export default function CardCollection (){

    return (
        <SafeAreaView style = {styles.countainer}>
            <View style = {styles.card}>
                <Image style={styles.image} source={image}/>
                <Text style={styles.text}>Objetos</Text>
                <View style={styles.viewEdit}>
                    <Image style={styles.imageOptions} source={edit}/>
                    <Image style={styles.imageOptions} source={remove}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    countainer:{
        marginTop: 25,
        height:100,
        marginHorizontal: "5%",
        backgroundColor: "#FFF",
        borderRadius: 15,
    },
    card:{
        height:"100%",
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection: 'row',        
    },
    image:{
        marginLeft:15,
        width: "22%",
        height:"80%"
    },
    text:{
        width: "40%",
        textAlign: "center",
        fontSize: 40,
        marginLeft: 20,
        color: '#27aca7'
    },
    viewEdit:{
        width:"25%",
        alignItems:"flex-end"
    },
    imageOptions:{
        width:40,
        height:40
    }

})