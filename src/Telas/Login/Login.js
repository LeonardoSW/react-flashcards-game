import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import FlashTextInput from './componentes/FlashTextInput';

export default function Login(){
    return( 
    <SafeAreaView style={styles.screen}>
        <View>
            <FlashTextInput txt = "E-mail" />
            <FlashTextInput txt = "Senha" />
        </View>
        <Text style={styles.pwdrecovery}>Esqueci a senha</Text>
        <View style = {styles.btnentrar}>
            <Button title="Entrar"/>
        </View>
    </SafeAreaView>
)}

const styles = new StyleSheet.create({

    screen:{
        height: "100%",
        justifyContent:'center',
    },
    input:{
        marginBottom: 10,
        justifyContent: 'center',
    },
    pwdrecovery:{
        color: "#f7f6fa",
        fontSize: 12,
        marginTop: 5,
        textAlign: 'right',
        marginRight: "10%"
    },
    btnentrar:{
        marginTop:20,
        alignItems: 'center',
    },
})