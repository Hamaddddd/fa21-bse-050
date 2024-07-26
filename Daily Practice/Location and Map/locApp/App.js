import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Linking, Pressable } from 'react-native';
import React,{useState} from 'react';

import Geolocation from '@react-native-community/geolocation';

export default function App() {

  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'Cool Photo App needs access to your Location ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  //state for saving location
  const [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const [latitude,longitude] = position.coords;
        setCurrentLocation({latitude,longitude});
        console.log(latitude,longitude);
      },
      error=> alert("ERROR",error.message),

      {enableHighAccuracy:true,timeout:15000,maximumAge:10000}

    )
  }

  

  const openMaps = ()=>{
    //destruucturing location from state

    const [latitude,longitude] = currentLocation;
    if(latitude,longitude){
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      Linking.openURL(url);
    }
    else{
      alert("Location Not Found");
    }
    
  }

  return (
    <View style={styles.container}>

      <View style={styles.coordsView}>

        <Text>Coordinates : </Text>
        <Text>
          Latitude : 
          {currentLocation ? currentLocation.latitude : "Please Wait..."}
          </Text>

          <Text>
          Longitude : 
          {currentLocation ? currentLocation.longitude : "Please Wait..."}
          </Text>

      </View>
     

      <StatusBar style="auto" />


      {currentLocation ? (
        <>
           <Pressable style={styles.pressableMap} onPress={openMaps}>
              <Text>Open Maps</Text>
            </Pressable>
        </>
      ):(
        <>
           <Pressable style={styles.pressableGetLoc} onPress={Permission}>
              <Text>Get Location</Text>
           </Pressable>
        
        </>
      )

      }
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

  pressableGetLoc:{
    backgroundColor:"red",

  },

  pressableMap:{
    backgroundColor:"green",

  },

  coordsView:{
    backgroundColor:"red",
    padding:10,
    margin:10,
    elevation:2,
    alignItems:"center",
    justifyContent:"center"
  }
});
