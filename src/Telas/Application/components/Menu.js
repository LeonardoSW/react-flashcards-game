import React from "react";
import { TouchableOpacity, StyleSheet, Text, SafeAreaView, View, Image } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MyCollections from "../MyCollections";

const Drawer = createDrawerNavigator();

export default function Menu (props){
    return (
      <Drawer.Navigator initialRouteName="MyCollections">
            <Drawer.Screen name="MyCollections" component={MyCollections} />
      </Drawer.Navigator>
    )
}