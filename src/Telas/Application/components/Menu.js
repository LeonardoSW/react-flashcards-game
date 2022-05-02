import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MyCollections from "../MyCollections";
import Cards from "../Cards";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Drawer = createDrawerNavigator();

function selectComponent(prop){
  if(prop = 1)
    return MyCollections;
  else
    return Cards;
}

export default function Menu (props){
    return (
      <Drawer.Navigator screenOptions={
        {
          drawerStyle: styles.screen,
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor:"#fff"
        }}       
        initialRouteName={props.navegationFrom}>
            <Drawer.Screen name="Minhas coleções" component={selectComponent(props.navegationFrom)} />
            <Drawer.Screen name="Cards" component={Cards} />
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