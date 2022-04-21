import React from 'react';
import { View, StyleSheet, Text, Button, Image, ScrollView, TouchableOpacity} from 'react-native';

import CardCollection from '../Application/components/CardCollection';

import image from '../../../assets/MyCollectionImages/bola.png';

export default function MyCollection(props){
    return( 
    <ScrollView style = {styles.screen}>
        <TouchableOpacity onPress={() => {
                props.navigation.navigate("Cards");
            }}>
            <CardCollection/>
        </TouchableOpacity>
        <CardCollection/>
        <CardCollection/>
        <CardCollection/>
        <CardCollection/>
        <CardCollection/>
        <CardCollection/>
        <CardCollection/>
    </ScrollView>)};

    const styles = StyleSheet.create({
        screen:{
            flex:1,
            backgroundColor:"#332e56"
        }


    })