import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import ChessBoard from './chessBoard/chessBoard';

export default function App() {

  let [username,setUsername] = useState("");
  let [password, setPassword] = useState("");

  return (

    <ChessBoard/>

    // <View style={styles.container}>

      
    //   {/* <Text style = {{fontSize: 30,color:"blue",fontWeight: "bold"}}
    //   >Login App</Text>

    //   <TextInput
    //     style={styles.input}
    //     keyboardType= "default"
    //     placeholder='Enter Username Here'
    //     placeholderTextColor="black"
    //     onChangeText={(text) => {
    //       setUsername(text)
    //     }}
    //     value={username}
    //   />
      
    //   <TextInput
    //     style={styles.input}
    //     keyboardType= "visible-password"
    //     placeholder='Enter Password Here'
    //     placeholderTextColor="black"
    //     onChangeText={(text) => {
    //       setPassword(text)
    //     }}
    //     value={password}
    //   />

    //   <Button
    //     color="green"
    //     title='Submit Now'
    //     onPress={() => {
    //       if(username == "cspeople" & password == "computerscience"){
    //         alert("Login Successful !!! Great");
    //       }
    //       else{
    //         alert("WARNING : Username Or Password Incorrect !!")
    //       }

    //     }}
    //   /> */}


    //   <StatusBar style="auto" />
    // </View>
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
