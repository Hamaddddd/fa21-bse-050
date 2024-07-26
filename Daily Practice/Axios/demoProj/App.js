import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const getPosts= async(userId)=>{
    try{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
      // console.log(response.data.body);
       console.log(response.data);

    }catch(e){
      console.log("Errorrrr1:",e);
    }
  }

  const postContent=async ()=>{
    try{
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts",{
        body:"Custom Post Content",
        userId:50,
        title:"Hamad Post roll no 50",
        hobbies:{first:"coding"},
        name:"Hamad Ahmed",
        class:"BSE"
      });

      console.log(response.data);


      console.log("First Hobby: ",response.data.hobbies.first);
    }catch(e){
      console.log("Errorrrr2:",e);
    }
  }
  
  const deletePost=async ()=>{
    try{
      const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/100");
      console.log(response.data);

    }catch(e){
      console.log("Errror3: ",e);
    }
  }

  useEffect(()=>{
    getPosts(70);

    postContent();
    deletePost();

  },[]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
