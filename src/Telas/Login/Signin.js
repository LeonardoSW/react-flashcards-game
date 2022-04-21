import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, Image} from 'react-native';

import FlashTextInput from './componentes/FlashTextInput';
import LogoImage from '../../../assets/logo-brain.png';


export default function Signin(){
    return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
            <Image style={styles.LogoImage} source={LogoImage}/>
            <Text style ={styles.LogoText}>Mind Booster</Text>
        </View>
        
        <Text style={styles.Txt}>Preencha os dados do seu cadastro</Text>

        <FlashTextInput txt = "E-mail"/>
        <FlashTextInput ocultPwd = {true} txt = "Senha"/>
        <FlashTextInput ocultPwd = {true} txt = "Repetir senha"/>

        <View style={styles.botaoCadastrar}>
            <Button color="#6a61a1" title="Cadastrar"/>
        </View>

    </SafeAreaView>
    )
}

const styles = new StyleSheet.create({
    screen:{
        marginTop:23,
        backgroundColor: '#332e56',
        width:"100%",
        height: "100%",
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    header:{
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
//        backgroundColor: "#abc"
    },
    LogoImage:{
        marginLeft: 20,
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    LogoText:{
        marginLeft:10,
        fontSize: 20,
        color: "#FFF"
    },
    Txt:{
        // width: "80%",
        // height: "25%",
        padding:50,
        paddingTop:60,
        color:"#FFF",
        fontSize: 25,
        textAlign: 'center',
        //backgroundColor: "#abc"
    },
    botaoCadastrar:{
        marginTop:"10%",
        width: "80%"
    },
})