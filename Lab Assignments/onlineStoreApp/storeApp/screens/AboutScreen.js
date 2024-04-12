import { View, StyleSheet,Pressable,Text } from "react-native";

function AboutScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>About Screen !!!!</Text>
            <Pressable onPress={() => navigation.push("Home")}>
                <Text>Go to Home</Text>
            </Pressable>
        </View>
    )
}

export default AboutScreen;

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