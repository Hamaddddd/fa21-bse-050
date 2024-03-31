import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';

const Whatsapp_Logo = require("./screens/wa.png")

function StatusCard(props){
    return(


        <View style = {styles.card}>
        <View style={styles.imageTab}>
            
        <Image style={styles.image} source={Whatsapp_Logo}/>

        <View style={styles.texts}>
            <Text style = {styles.cardText}>{props.children}</Text>
            <Text style={styles.cardSubText}>3:41 PM</Text>

            
            
        </View>

        </View>

        
        
     </View>

    

    )
    
}


const styles = StyleSheet.create({
    
    card:{
        borderRadius:2,
        elevation:10,
        marginHorizontal:15,
        marginVertical:10,
        
        
        
    },
    cardText:{
        fontSize:20,
        marginTop:10,
        fontWeight:"bold",
        justifyContent:"flex-start",
        alignItems:"flex-start"
        
    },
    cardSubText:{
        marginTop:10,
        fontSize:15,
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    imageTab:{
        flexDirection:"row",
        borderRadius:5,
        // borderWidth:2,
        // borderColor:"black",
        backgroundColor:"white",


    },
    image:{
        borderRadius:80,
        marginLeft:10,
        marginRight:20,
        width:80,
        height:70,
        marginTop:2,
        marginBottom:5
    },
   
    texts:{
        flexDirection:"column"
    },
    subTexts:{
        flexDirection:"row",
        
    }

    
  });

  export default StatusCard;