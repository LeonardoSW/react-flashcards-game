import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, Image} from 'react-native';

import FlashInputText from '../Login/componentes/FlashTextInput';
import Card from '../Application/components/Card';


const props = {
    front: "Obj1",
    back:"Obj2"}

export default function MyCollection(){
    return( 
    <SafeAreaView>
        <FlashInputText txt = "Filtro" />

        <View>
            <Button title='Jogar!'/>
        </View>

        <Card {...props}/>
        <Card {...props}/>
        <Card {...props}/>
        <Card {...props}/>
    </SafeAreaView>)
    };

    const styles = StyleSheet.create({
        button:{
            width: "50%"
        }
    });