import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, Image} from 'react-native';

import CardCollection from '../Application/components/CardCollection';

import image from '../../../assets/MyCollectionImages/bola.png';

export default function MyCollection(){
    return( 
    <>
    <CardCollection/>
    <CardCollection/>
    <CardCollection/>
    <CardCollection/>
    </>)};