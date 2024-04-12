import { View, StyleSheet,Pressable,Text, TouchableOpacity } from "react-native";



function ProductDetailsScreen({route, navigation}){

    const {p1price,p2price,p3price} = route.params;

    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Product Details Screen</Text>
            <Text style = {styles.text}>Details of Product </Text>
            
                <Text style={styles.menu}>Price: {JSON.stringify(p1price)}</Text>
                <Text style={styles.menu}>Price: {JSON.stringify(p2price)}</Text>
                <Text style={styles.menu}>Price: {JSON.stringify(p3price)}</Text>


            
        </View>
    )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        marginTop:30,
        marginBottom:30,
        fontSize:20,
        fontWeight:"bold"
    },
    
    menu:{
        marginHorizontal:20,
        color:"blue",
        fontSize:20,
        fontWeight:"bold",
        marginVertical:12,
        justifyContent:"center",
        alignItems:"center"
    }
})