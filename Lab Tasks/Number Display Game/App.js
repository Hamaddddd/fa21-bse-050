import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  let [number, setNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ color: "blue", fontWeight: 'bold', fontSize: 35 }}>
        Number Game
      </Text>

      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter Number Here !!!'
        placeholderTextColor="red"
        onChangeText={(text) => {
          setNumber(text)
        }}
        value={number}
      />

      <Button
        color="blue"
        title='GET'
        onPress={() => {
          alert(number);
        }}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});
