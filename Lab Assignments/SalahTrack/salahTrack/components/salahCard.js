import {Text,View,StyleSheet,Image} from "react-native";
import React,{useState} from "react";
import CheckBox from 'react-native-check-box';


//Child class as  props are being passed from Calendar Class
function SalahCard(props){

    // Function to handle checkbox click and send data to parent
    const handleCheckboxClick = (status) => {
        // Sending data to parent
        props.onCheckboxClick(props.text, status);
    }

    // let tfalse=()=>{
    //     if(props.aloneChecked){
    //         props.jamatChecked=false;
    //     }
    //     else if(props.jamatChecked){
    //         props.aloneChecked=false;
    //     }
    // }

    // tfalse();

    return(
        
        <View style = {styles.mainCard}>
            <View style={styles.salahTextView}>
                <Text style={styles.salahText}>  {props.text}  </Text>
            </View>
            <CheckBox
                style={{flex: 1, padding: 10}}
                rightText="Alone"
                onClick={() => handleCheckboxClick("Alone")}
                isChecked={props.aloneChecked}
                
            />
            <CheckBox
                style={{flex: 1, padding: 10}}
                rightText="Jamat"
                onClick={() => handleCheckboxClick("Jamat")}
                isChecked={props.jamatChecked}
            />
        </View>
    )
}


export default SalahCard;

const styles = StyleSheet.create({
    mainCard:{

        width:"auto",
        height:50,
        flexDirection:"row",
        marginHorizontal:15,
        marginVertical:15,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"black",
        // elevation:2,
        justifyContent:"space-around"
        
    },
    salahText:{
        color:"black",
        // backgroundColor:"green",
        fontSize:15,
        fontWeight:"bold",
    },

    salahTextView:{
        backgroundColor:"lightgreen",
        marginHorizontal: 8,
        width:120,
        justifyContent:"center",
        alignItems:"center",
        height:"auto"
    },

    secondView:{
        flexDirection:"row"
    },

    checkboxView:{
        flexDirection:"row",
        alignItems:"center"
        
    }
})