import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import StatusCard from '../statusCard';
function StatusScreen(){
    return(
        <ScrollView>

        <View style={styles.statusSc}>
            <View style = {styles.header}>
             <Text style = {styles.headerText}>Status Screen Demo</Text>
             </View>

             <View>

            <StatusCard>Status 1</StatusCard>
            <StatusCard>Status 2</StatusCard>
            <StatusCard>Status 3</StatusCard>
            <StatusCard>Status 4</StatusCard>
            <StatusCard>Status 5</StatusCard>

            <StatusCard>Status 1</StatusCard>
            <StatusCard>Status 2</StatusCard>
            <StatusCard>Status 3</StatusCard>
            <StatusCard>Status 4</StatusCard>
            <StatusCard>Status 5</StatusCard>

            <StatusCard>Status 1</StatusCard>
            <StatusCard>Status 2</StatusCard>
            <StatusCard>Status 3</StatusCard>
            <StatusCard>Status 4</StatusCard>
            <StatusCard>Status 5</StatusCard>

            
            



        </View>
        </View>
        </ScrollView>
        
    )
}

export default StatusScreen;






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
      statusSc:{
        backgroundColor:"grey"
      }
    
  });