import { View, StyleSheet,Pressable,Text, TouchableOpacity } from "react-native";

function OrdersScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Orders Screen !!!!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Text>Go to About</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrdersScreen;

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
})