import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/Telas/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43405e',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
