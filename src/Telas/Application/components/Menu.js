import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MyCollections from "../MyCollections";
import Cards from "../Cards";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Drawer = createDrawerNavigator();

export default function Menu (props){
    return (
      <Drawer.Navigator screenOptions={
        {
          drawerStyle: styles.screen,
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor:"#fff"
        }}       
        initialRouteName="MyCollections">
            <Drawer.Screen name="Minhas coleções" component={MyCollections} />
            <Drawer.Screen name="teste1" component={Cards} />
            <Drawer.Screen name="teste2" component={MyCollections} />
      </Drawer.Navigator>
    )
}


const styles = StyleSheet.create({
  screen:{
    backgroundColor: "#332e56",
    color:"#fff"
  },
  drawertext:{
    backgroundColor: "#abc"
  }

});