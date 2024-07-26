import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {CounterContext, useCounterContext} from './CounterContext'
import { useContext } from 'react';

function Counter(){
    
    const counter = useContext(CounterContext);

    const {count,Increment,Decrement} = useCounterContext();

    return(
        <View style={styles.container}>

            <Text>{counter.count}</Text>

            <Pressable style={styles.pressable} 
                onPress={counter.Increment}
            >
                <Text style={styles.textStyleIncrement}>Click to Increment</Text>
            </Pressable>

            <Pressable style={styles.pressable}
                onPress={counter.Decrement}
            >
                <Text style={styles.textStyleDecrement}>Click to Decrement</Text>
            </Pressable>

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

    textStyleIncrement:{
        fontSize:10,
        color:"green",
        fontWeight:"bold"
    },

    textStyleDecrement:{
        fontSize:10,
        color:"red",
        fontWeight:"bold"
    },

    pressable:{

        height:"auto",
        width:200,
        borderRadius:10,
        borderWidth:2,
        borderColor:"black",
        justifyContent:"center",
        alignItems:"center",
        margin:10
    }
  });

  export default Counter;