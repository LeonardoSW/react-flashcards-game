import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/Telas/Login/Login';
import Sigin from './src/Telas/Login/Singin';

export default function App() {
  return (
    <View style={styles.container}>
      <Sigin/>
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
