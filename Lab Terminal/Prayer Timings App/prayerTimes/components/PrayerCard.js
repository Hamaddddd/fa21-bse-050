
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState,useEffect } from 'react';

function PrayerCard (props){
    return(
        <View style={styles.mainView}>

          <View style={styles.subView}>

            <View style={styles.textView1}>
              <Text style = {styles.text}>{props.prayer}</Text>
            </View>

            <View style={styles.spacing}></View>

            <View style={styles.textView2}>
              <Text style = {styles.text}>{props.time}</Text>
            </View>

          </View>
            
        </View>
    );
}

export default PrayerCard;

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: "center",
        width:330,
        height:70,
        borderRadius:50,
        // borderWidth:2,
        borderColor:"black",
        backgroundColor:"#27c43a",
        elevation:13,
        marginBottom:10
      },
      subView:{
        flexDirection:"row",
        justifyContent: "center",
        alignItems:"center"
        
      },
      textView1:{
        backgroundColor: "#b1e3b7",
        marginLeft:5,
        width:130,
        height:60,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
      },
      textView2:{
        backgroundColor: "#b1e3b7",
        marginRight:5,
        width:130,
        height:60,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
      },
      text:{
        fontSize:25,
        fontWeight:"bold",
        color:"#242222",
      },
      spacing:{
        marginHorizontal:20
      }
})