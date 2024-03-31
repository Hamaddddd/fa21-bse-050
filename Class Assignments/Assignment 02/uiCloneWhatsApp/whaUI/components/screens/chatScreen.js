import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../card';

function ChatScreen(){
    return(
        <ScrollView>

        <View style={styles.chatSc}>
            <View style = {styles.header}>
             <Text style = {styles.headerText}>Chat Screen Demo</Text>
             </View>

             <View>

            <Card>Hamad Ahmed</Card>
            <Card>Chat 2</Card>
            <Card>Chat 3</Card>
            <Card>Chat 4</Card>
            <Card>Chat 5</Card>
            <Card>Chat 6</Card>
            <Card>Chat 7</Card>
            <Card>Chat 8</Card>
            <Card>Chat 9</Card>
            <Card>Chat 10</Card>
            <Card>Chat 11</Card>
            <Card>Chat 12</Card>
            



        </View>
        </View>
        </ScrollView>
        
    )
}

export default ChatScreen;






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "flex-start",
    },
    header:{
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:50,
        marginBottom:40,
        
      },
      headerText:{
        fontWeight:"bold",
        fontSize:20,
        color:"white"
      },
      chatSc:{
        backgroundColor:"grey"
      }
    
  });