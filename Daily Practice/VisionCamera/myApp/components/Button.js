import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function ReuseableBtn(props){

    function pressedFunc(){
        console.log("btn clicked")
    }

    return(
        <View style = {styles.mainView}>
            <Pressable style = {styles.Pressable}
                onPress={pressedFunc}
            >
                <Text style = {styles.pressableText}>{props.text}</Text>
            </Pressable>
        </View>

    );

}

export default ReuseableBtn;

const styles = StyleSheet.create({
    Pressable:{
        height:30,
        width: 200,
        elevation:4,
        borderRadius:2,
        
        margin:20,
        backgroundColor:"grey"
    },
    pressableText:{
        color:"white",
        margin:4
    },
    mainView:{
        justifyContent:"center",
        alignItems:"center"
    }
})