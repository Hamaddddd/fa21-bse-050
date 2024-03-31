// App.js
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import TaskCard from './components/TaskCard';

export default function App() {
  const [task, addTask] = useState('');
  const [allTasks, setAllTasks] = useState([]); // Initialize as empty array

  function handleAddTask() {
    if (task !== '') {
      setAllTasks((prevTasks) => [...prevTasks, task]); // Add task using spread syntax
      addTask(''); // Clear text input
      alert('Task Added Successfully');
    } else {
      alert('Please enter a valid task');
    }
  }

  function deleteTask(index){
      let tasksCopy = [...allTasks];
      tasksCopy.splice(index,1);
      setAllTasks(tasksCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.TaskListView}>
          <Text style={styles.heading1}>Tasks Here :- Click on Task To Delete</Text>


          {allTasks && allTasks.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={(index)=>deleteTask(index)}>
              <TaskCard  text={item} />
            </TouchableOpacity>
          )
          })}

        </View>
        <TextInput
          style={styles.textFeild}
          keyboardType="default"
          placeholder="Enter Task Here"
          placeholderTextColor="white"
          onChangeText={(text) => {
            addTask(text);
          }}
          value={task}
        />
        <Pressable
          onPress={() => handleAddTask()}
        >
          <Text style={styles.buttonAdd}>Add Task</Text>
        </Pressable>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1: {
    
    marginTop:70,
    marginBottom:20,
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  textFeild: {
    marginHorizontal:20,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 16,
    padding: 20,
    marginTop: 39,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "300",
    color: "white"
  },
  buttonAdd: {
    color: "white",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 26,
    marginHorizontal:120,
    marginVertical: 20,
    backgroundColor: "green",
    padding: 10
  },
  TaskListView: {

  }
});

