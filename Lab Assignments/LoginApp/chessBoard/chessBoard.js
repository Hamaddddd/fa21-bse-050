import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

function ChessBoard(){
    return(
        <View style ={styles.rootView}>

            <View style = {styles.Vertical_Bars}>

                {/* //all white bars */}
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_whiteTile}></View>


            {/* <View style={styles.Vertical_blackTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_blackTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_blackTile}></View>
            <View style={styles.Vertical_whiteTile}></View>
            <View style={styles.Vertical_blackTile}></View>
            <View style={styles.Vertical_whiteTile}></View> */}



            {/* <View style={styles.Horizontal_Bars}>
                
            <View style={styles.Horizontal_blackTile}></View>
            <View style={styles.Horizontal_whiteTile}></View>
            <View style={styles.Horizontal_blackTile}></View>
            <View style={styles.Horizontal_whiteTile}></View>
            <View style={styles.Horizontal_blackTile}></View>
            <View style={styles.Horizontal_whiteTile}></View>
            <View style={styles.Horizontal_blackTile}></View>
            <View style={styles.Horizontal_whiteTile}></View>

            </View> */}


            </View>

            
            
        </View>
    )
}

const styles = StyleSheet.create({

    rootView:{

        flex:1,
        backgroundColor:"red"
    },
    

    Vertical_blackTile:{
        flexDirection:"column",
        flex:1,
        backgroundColor:"black",
        marginVertical: 15,
        
    },

   Vertical_whiteTile:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"white",
        marginVertical: 15,
        
    },

    

    Horizontal_blackTile:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"black",
        marginVertical: 15,
        
    },

   Horizontal_whiteTile:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"white",
        marginVertical: 15,
        
    },

    Vertical_Bars:{
        flex:1,
        flexDirection:"column", //by default col
        backgroundColor:"black" //color change
    },

    Horizontal_Bars:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"green"
    },

    
    

})

export default ChessBoard;