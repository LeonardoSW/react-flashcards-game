import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, Image} from 'react-native';

import FlashTextInput from './componentes/FlashTextInput';
import LogoImage from '../../../assets/logo-brain.png';


export default function Login(){
    return( 
    <SafeAreaView style={styles.screen}>

        <View style={styles.ViewLogo}>
            <Image style={styles.LogoImage} source={LogoImage}/>
            <Text style={styles.LogoText}>Mind Booster</Text>
        </View>

        <FlashTextInput txt = "E-mail" />
        <FlashTextInput txt = "Senha" />
        
        <Text style={styles.pwdrecovery}>Esqueci a senha</Text>

        
            <Button color="#6a61a1" title="Entrar"/>
            
            <Button color="#6a61a1" title="Cadastre-se"/>
        

    </SafeAreaView>
)}

const styles = new StyleSheet.create({
    screen:{
        width:"100%",
        height: "100%",
        justifyContent:'flex-start',
        alignItems: 'center',
    },

    ViewLogo:{
        height: "40%",
        width: "80%",
        alignItems:'center',
        justifyContent: 'center',
        //backgroundColor: "#abc"
    },
    LogoImage:{
        alignItems: 'center',
        width: 150,
        height: 150
    },
    LogoText:{
        fontSize: 40,
        color: "#FFF"
    },
    input:{
        marginBottom: 10,
        justifyContent: 'center',
    },
    pwdrecovery:{
        width:"80%",
        color: "#f7f6fa",
        fontSize: 13,
        marginTop: 5,
        textAlign: 'right',        
    },
    btnentrar:{
        marginTop:20,
        alignItems: 'center',
        width: "100%",
        backgroundColor: "#abc"
        
    }
})