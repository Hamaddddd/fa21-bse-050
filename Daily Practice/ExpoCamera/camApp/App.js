import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import {CameraView,useCameraPermissions} from "expo-camera";
import { useState } from 'react';

export default function App() {

  let [facing,setFacing] = useState("back"); //by default camera is in back mode

  let[permission,requestPermission] = useCameraPermissions(); 

  if(!permission.granted){
    return(
      <View style={styles.container}>
        <Text>Please grant permissions</Text>
        <Button onPress={requestPermission} title='Grant Permission'/>
      </View>
    )
  }

  function toggleFacing(){
    if(facing==="back"){setFacing("front")}
    else{
      setFacing("back");
    }
  }

  return (
    <View style={styles.container}>

      <CameraView style={styles.camera} facing={setFacing}>
        <TouchableOpacity onPress={toggleFacing}>
          <Text>Flip Camera</Text>
        </TouchableOpacity>
      </CameraView>
    

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
  camera:{
    width:700,
    height:700
  }
});
