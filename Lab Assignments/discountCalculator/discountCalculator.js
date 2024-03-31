import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DiscountCalculator(){
    let [price,setPrice] = useState();
    let [discount,setDiscount] = useState();
    return(
        <View style = {styles.container}>
            <TextInput
            style={styles.input}
            keyboardType= "numeric"
            placeholder='Enter Price Here'
            placeholderTextColor="black"
            onChangeText={(text) => {
            setPrice(text)
            
            }}
            value={price}
        />
      
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder='Enter Discount Percentage Here'
            placeholderTextColor="black"
            onChangeText={(text) => {
            setDiscount(text)
            }}
            value={discount}
        />

        <Text>Final Price: {price/discount}</Text>
        <Text>You Save: {discount} %</Text>



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
    input: {
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '80%',
    },
  });

  export default DiscountCalculator;