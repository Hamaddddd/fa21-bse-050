import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SalahCard from '../components/salahCard';

function SplashScreen({navigation}){
    return(
        <View>
            <TouchableOpacity 
            // onPress={()=>{navigation.navigate("Calendar")}}
            >

                <Text style={{fontSize:20}}
                >This is Splash Screen !!! Hit to start</Text>

            </TouchableOpacity>
        </View>
    )
}

export default SplashScreen;