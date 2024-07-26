import { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function SplashScreen({navigation}){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Home");
        },3500);
    });
    return(
        <View style = {styles.mainView}>
            <View>
                <Image source={require('../assets/icon.png')} style={styles.image}/>
                <Text style={styles.text}>Prayer Persistent</Text>
            </View>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#349eeb"
    },
    image:{
        width:250,
        height:250,
        resizeMode:"center",
        borderRadius:60,
        marginBottom:40
    },
    text:{
        fontSize:30,
        color:"white",
        textAlign:"center",
        fontWeight:"bold"
    }
})