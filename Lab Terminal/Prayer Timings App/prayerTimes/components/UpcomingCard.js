
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState,useEffect } from 'react';

function UpcomingCard (props){
    return(
        <View style={styles.mainView}>

          <View style={styles.subView}>

            
          <View style={styles.textView1}>
              <Text style = {styles.text}>{props.upcoming}</Text>
            </View>
            

          </View>
            
        </View>
    );
}

export default UpcomingCard;

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: "center",
        width:200,
        height:70,
        borderRadius:10,
        // borderWidth:2,
        borderColor:"black",
        backgroundColor:"#27c43a",
        elevation:13,
        marginBottom:10
      },
      
      textView1:{
        backgroundColor: "#b1e3b7",
        marginLeft:5,
        width:180,
        height:60,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
      },
      
      
      text:{
        fontSize:25,
        fontWeight:"bold",
        color:"#242222",
      }
})