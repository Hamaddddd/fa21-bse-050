import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,
   Pressable, 
   Touchable,
   TouchableOpacity} from 'react-native';


   const TaskCard = (props) =>{


    

    return (

        <View>
            <Text style= {styles.heading2}>{props.text}</Text>

            <View style = {styles.buttonsView}>
            <TouchableOpacity style={styles.Buttons}
              >
                <Text>Update</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={styles.Buttons} onPress={()=>deleteTask(index)}
              >
                <Text>Delete</Text>
              </TouchableOpacity> */}
            </View>
        </View>
        

    )
   }

   export default TaskCard;


   const styles = StyleSheet.create({
    
    
    heading2  : {
    padding:15,

    backgroundColor:"black",
      borderColor: "white",
      borderRadius: 10,
      alignContent: "center",
      color:"white",
      fontSize: 20,
      fontWeight: "500",
      marginVertical:12
    },
    
    Buttons:{
    
    fontSize: 20,
    
    marginVertical: 5,
    backgroundColor: "white",
    padding:10
    
    },
    buttonsView:{
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"    
}
  });
  