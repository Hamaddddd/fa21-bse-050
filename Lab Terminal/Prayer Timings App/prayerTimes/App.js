import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import { useEffect } from 'react';
import { TimingProvider } from './components/TimingContext';

import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from Expo
import SettingsScreen from './components/SettingsScreen';

export default function App() {

  const Stack = createNativeStackNavigator();


  

  return (
    <TimingProvider>
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Splash'>

        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={HomeScreen} 
        options={ ({navigation}) => (
          {
            headerTitle:"See Prayer Timings",
             headerBackVisible:false, 
             
             headerTitleAlign:"left",
             headerTitleStyle:styles.headerTitle,
             //headerShown:false,
             
             headerRight:()=>(
              <FontAwesome 
               name="cog" // Font Awesome icon name
                size={28}
                color="#349eeb"
                // style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate("Settings")} // Replace with your desired action
              />
             )

        })}/>

        <Stack.Screen name='Settings' component={SettingsScreen}
          options={
            {
            headerTitleAlign:"center",
             headerTitleStyle:styles.headerTitle,
            //  headerBackTitle:"Back",
            //  headerBackTitleStyle:styles.headerBackButton,
             headerStyle: styles.headerStyle
            }
          }
        />

      </Stack.Navigator>
      
    </NavigationContainer>
    </TimingProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle:{
    color:"#349eeb",
    fontWeight:"bold",
    fontSize:22
  },
  
  headerBackButton:{
    color:"#349eeb",
  },
  headerStyle:{

    }
  
});
