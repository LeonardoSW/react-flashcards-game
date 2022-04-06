import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";

export default function FlashTextInput({...txt}) {
  const [text, onChangeText] = React.useState(txt.txt);
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style = {styles.viewInput}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaview:{
    width: "100%",
    
    justifyContent: 'center',
  },
  viewInput:{
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "4%"
  },
  input: {
    height: 50,  
    width: "80%",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#6200ee",
    color: "#6200ee",
    backgroundColor: "#FFF",
    padding: 10,
    position: "relative",
    textAlign: "center",
  },
});

//export default FlashTextInput;