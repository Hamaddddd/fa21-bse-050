import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './components/screens/chatScreen';
import StatusScreen from './components/screens/statusScreen';

export default function App() {
  return (
    <View style={styles.container}>

     

     <View>
      <ChatScreen></ChatScreen>
      {/* <StatusScreen></StatusScreen> */}
      

     </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"green"
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: "flex-start",
  },
 
});
