import { View, StyleSheet,Pressable,Text, TouchableOpacity } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Home Screen !!!!</Text>

            <View style={styles.menu}>

            <TouchableOpacity onPress={() => navigation.navigate("Products")}>
                
                <Text style = {styles.menu}>Manage Products</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Employees")}>
                <Text style = {styles.menu}>Manage Employees</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <Text style = {styles.menu}>Manage Orders</Text>
            </TouchableOpacity>




            </View>
            
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        marginTop:30,
        marginBottom:100,
        fontSize:20,
        fontWeight:"bold"
    },
    
    menu:{
        color:"blue",
        fontSize:30,
        fontWeight:"bold",
        marginVertical:22,
        justifyContent:"center",
        alignItems:"center"
    }
})