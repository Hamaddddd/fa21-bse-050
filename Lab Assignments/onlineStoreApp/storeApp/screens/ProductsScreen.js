import { View, StyleSheet,Pressable,Text, TouchableOpacity } from "react-native";

const productsList={
    p1:{
        name:"Laptop 1",
        p1price: "Rs 245000",
        model: 357
    },
    p2:{
        name:"Mobile 1",
        p2price: "Rs 0001212",
        model:200
    },
    p3:{
        name:"Handcrafted 1",
        p3price: "Rs 12222133",
        model: 40
    },
}


function ProductScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style = {styles.text}>Product Screen !!!</Text>
            <Text style = {styles.text}>Click Item to View Details</Text>
            <TouchableOpacity 
            
            onPress={() => navigation.navigate("ProductDetails",{p1price})}>
                <Text style={styles.menu}>Product Name: {productsList.p1.name}</Text>
                <Text style={styles.menu}>Product Name: {productsList.p2.name}</Text>
                <Text style={styles.menu}>Product Name: {productsList.p3.name}</Text>

            </TouchableOpacity>

            <TouchableOpacity 
            
            onPress={() => navigation.navigate("ProductDetails",{p2price})}>
                <Text style={styles.menu}>Product Name: {productsList.p2.name}</Text>

            </TouchableOpacity>

            <TouchableOpacity 
            
            onPress={() => navigation.navigate("ProductDetails",{p3price})}>
                <Text style={styles.menu}>Product Name: {productsList.p3.name}</Text>

            </TouchableOpacity>


        </View>
    )
}

export default ProductScreen;

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