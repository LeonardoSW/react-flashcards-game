import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, Image} from 'react-native';

import FlashTextInput from './componentes/FlashTextInput';
import LogoImage from '../../../assets/logo-brain.png';
//import auth from '../../../firebase'

export default function Login(props){

    // const handleSignUp = () =>{
    //     auth 
    //         .createUserWithEmailAndPassword(email,pwd)
    //         .then(userCredentials => {
    //             const user = userCredentials.user;
    //             console.log(user.email)
    //     })
    //     .catch(error => alert(error.message))
    // }

    return( 
    <SafeAreaView style={styles.screen}>

        <View style={styles.ViewLogo}>
            <Image style={styles.LogoImage} source={LogoImage}/>
            <Text style={styles.LogoText}>Mind Booster</Text>
        </View>

        <FlashTextInput txt = "E-mail" />
        <FlashTextInput ocultPwd = {true} txt = "Senha" />
        
        <Text style={styles.pwdrecovery}>Esqueci a senha</Text>

        <View style={styles.botaoEntrar}>
            <Button  color="#6a61a1" title="Entrar" onPress={() => {
                props.navigation.navigate("Menu",{navegationFrom:1});
            }}/>
        </View>
        <View style={styles.botaoCadastrar}>
            <Button color="#b58d97" title="Cadastre-se" onPress={() => {
                props.navigation.navigate("Sigin");
            }}/>
        </View>
        

    </SafeAreaView>
)}

const styles = new StyleSheet.create({
    screen:{
        backgroundColor: '#332e56',
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
    botaoEntrar:{
        marginTop:20,
        width: "80%"
    },
    botaoCadastrar:{
        marginTop:"30%",
        width: "80%"
    }
})