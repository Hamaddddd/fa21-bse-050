import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/SplashScreen';
import CalendarScreen from './screens/CalendarScreen';
import ChartScreen from './screens/ChartsScreen';
import { PrayerProvider } from './screens/PrayerContext';
import Tabs from './screens/Tabs';


import { Provider } from 'react-redux';
import store from './store';



const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <Provider store={store}>
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Calendar'>

        <Stack.Screen name='Splash Screen' component={SplashScreen}
        options={{title:" مرحباً"}}/>
        <Stack.Screen name='Calendar' component={CalendarScreen}
        options={{title:"Salah Tracker"}}/>
        {/* <Stack.Screen name='Chart' component={ChartScreen}/> */}

        <Stack.Screen name='Tabs' component={Tabs}
        options={{title:"Bar Chart Progress"}}
        />


      </Stack.Navigator>
    </NavigationContainer>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
