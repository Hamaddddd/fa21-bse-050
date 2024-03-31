import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,TextInput, Text, View,Button } from 'react-native';

function StudentRecord(){

    let [name,setName] = useState([]);
    let [gpa,setGpa] = useState();

    function handleAdd() {
      if (name !== '') {
        setName((name); // Add task using spread syntax
        alert('Name Added Successfully');
      } else {
        alert('Please enter a valid name');
      }
    }
  
    function deleteStd(index){
        let copy = [...name];
        copy.splice(index,1);
        setName(copy);
    }

    return(
        
    
        <View style = {styles.container}>
          <View style = {styles.inputView}>
            
            <Text>Name:</Text>
          <TextInput
            style={styles.input}
            keyboardType= "default"
            placeholder='Enter Name Here'
            placeholderTextColor="black"
            onChangeText={(text) => {
            setName(text)
            
            }}
            value={name}
        />
      <Text>GPA : </Text>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder='Enter Gpa Here'
            placeholderTextColor="black"
            onChangeText={(text) => {
            setGpa(text)
            }}
            value={gpa}
        />
          </View>
           
           <View style = {styles.btnView}>
            <Button title='Add' style={styles.btn} 
            onPress={()=>handleAdd}></Button>
            <Button title='Search' style={styles.btn}></Button>
           </View>

           <View style={styles.displayCard}>
           {name && name.filter((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={(index)=>deleteTask(index)}>
              <TaskCard  text={item} />
            </TouchableOpacity>
          )
          })}
           </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView:{
      marginTop:80,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '80%',
    },
    btnView:{
      flexDirection:"row",
    },
    btn:{
      color:"black",

    },
    displayCard:{
      flex:1,
      flexDirection:"column"
    }
  });

  export default StudentRecord;