import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DiscountCalculator from './Lab Tasks/discountCalculator';
import StudentRecord from './Lab Tasks/studentRecordEntry';

export default function App() {
  return (
    <StudentRecord></StudentRecord>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
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
});
