import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/Telas/Login/Login';
import Signin from './src/Telas/Login/Signin';

import MyCollection from './src/Telas/Application/MyCollections';
import Card from './src/Telas/Application/Cards';
import Menu from './src/Telas/Application/components/Menu';

const Stack = createStackNavigator(); //he

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login} /*options={{title:"Bem Vindo!"}}*//>
        <Stack.Screen name='Sigin' component={Signin}/>
        <Stack.Screen name='Menu' component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#332e56',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
