import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProductScreen from './screens/ProductsScreen';
import EmployeesScreen from './screens/EmployeesScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProductDetailsScreen from './screens/ProductDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='About' component={AboutScreen}></Stack.Screen>
        <Stack.Screen name='Products' component={ProductScreen}></Stack.Screen>
        <Stack.Screen name='Employees' component={EmployeesScreen}></Stack.Screen>
        <Stack.Screen name='Orders' component={OrdersScreen}></Stack.Screen>
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
