import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';

const Whatsapp_Logo = require("./screens/wa.png")

function Card(props){
    return(


        <View style = {styles.card}>
        <View style={styles.imageTab}>
        <Image style={styles.image} source={Whatsapp_Logo}/>

        <View style={styles.texts}>
            <Text style = {styles.cardText}>{props.children}</Text>

            <View style={styles.subTexts}>
            <Text style={styles.cardSubText}>Message Shown Here</Text>
            <Text style={styles.cardSubText}>               12:27</Text>
            </View>
            
        </View>

        </View>

        
        
     </View>

    

    )
    
}


const styles = StyleSheet.create({
    
    card:{
        borderRadius:10,
        elevation:10,
        marginHorizontal:7,
        marginVertical:5,
        
        
    },
    cardText:{
        fontSize:20,
        fontWeight:"bold",
        justifyContent:"flex-start",
        alignItems:"flex-start"
        
    },
    cardSubText:{
        fontSize:15,
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    imageTab:{
        flexDirection:"row",
        borderRadius:5,
        // borderWidth:2,
        // borderColor:"black",
        backgroundColor:"white"


    },
    image:{
        borderRadius:20,
        marginLeft:20,
        marginRight:10,
        width:50,
        height:50

    },
    texts:{
        flexDirection:"column"
    },
    subTexts:{
        flexDirection:"row",
        
    }

    
  });

  export default Card;