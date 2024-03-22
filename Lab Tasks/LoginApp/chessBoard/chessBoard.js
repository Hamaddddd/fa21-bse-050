import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

function chessBoard(){
    return(
        <View style ={styles.rootView}>
            
        </View>
    )
}

const styles = StyleSheet.create({

    rootView:{
        flexDirection:"column",

        flex:1,
        backgroundColor:"green"
    },
    row:{
        flexDirection:"row"
    },

    Tile:{
        aspectRatio:1,
        justifyContent:"center",
        alignContent:"center",
        
    },
    

})

export default chessBoard;