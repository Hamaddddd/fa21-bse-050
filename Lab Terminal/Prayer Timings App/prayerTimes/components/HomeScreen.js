
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useState,useEffect } from 'react';

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Location from "expo-location";

// import {axios} from "react-native-axios";

import axios from "axios";

import { useTimingContext } from './TimingContext';
import PrayerCard from './PrayerCard';
import UpcomingCard from './UpcomingCard';


function HomeScreen(){

    const {timings,setTimings,response,setResponse,school,method} = useTimingContext();

    let [location, setLocation] = useState(null);

    let [error,setError] = useState(null);

    let[upcoming,setUpcoming] = useState("null");

    let [date, setDate] = useState(new Date());

   // console.log(date);

    useEffect( ()=>{

        (async()=>{

            let {status} = await Location.requestForegroundPermissionsAsync();

            if(status !== "granted"){
                setError("PLease Allow Location Permission");
                return;
            }
            
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            storeLocation(location);
            

        })();

        

    }, [] );

    let text = "Wait till I get location !!!";

    if(location){
        text = JSON.stringify(location);
    }

    const storeLocation = async (location) => {
            try{
            if(location){
                await AsyncStorage.setItem("location", JSON.stringify(location));

                await AsyncStorage.setItem("latitude",JSON.stringify(location.coords.latitude));

                await AsyncStorage.setItem("longitude",JSON.stringify(location.coords.longitude));


            }
        }
        catch(err){
            console.log("Failed to store location in Async",err);
        }

    }

    useEffect(()=>{
        fetchTimings();
    }, [location]);

    const fetchTimings = async()=>{

        try{
            const latitude =  await AsyncStorage.getItem("latitude"); 
            const longitude =  await AsyncStorage.getItem("longitude");   
  
            
            console.log("Stored location value:", latitude,longitude); // Added log for debugging


            if(latitude && longitude){

                console.log("Fetching"); // Added log for debugging

                //fetch here
                // const {latitude,longitude} = location.coords;
                console.log("Lat",latitude);
                console.log("Long",longitude);

                if(latitude&&longitude){

                    const response = await axios.get("http://api.aladhan.com/v1/timings",{
                        params:{
                            date:date,
                            latitude:latitude,
                            longitude:longitude,
                            method : method,
                            school:school,
                        }
                    });        
                    
                    console.log(response.data);
                    setResponse(response.data);
    
                    console.log(response.data.data.timings.Fajr);
                    setTimings(response.data.data.timings);

                }
        
            }
        }
        catch(err){
            console.log("Failed to fetch location from Async",err);

        }
       
    }

        function parseTimeString(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        return { hours, minutes };
        }



        function getUpcoming(timings) {

        const currentTime = new Date();

        const currentHours = currentTime.getHours();

        const currentMinutes = currentTime.getMinutes();

        let upcomingPrayer = null;

        let minDiff = Number.MAX_SAFE_INTEGER;

        for(const prayer in timings){

            const {hours,minutes} = parseTimeString(timings[prayer]);

            const timeDiff = (hours*60 + minutes) - (currentHours*60 + currentMinutes);

            if(timeDiff>=0 && timeDiff<minDiff){
                minDiff = timeDiff;
                upcomingPrayer = prayer;
                setUpcoming(upcomingPrayer);
            }
        }
        

        return upcomingPrayer;
    }

    useEffect(()=>{
        getUpcoming(timings);
    },[timings])






    
    

    



    return(
        <ScrollView>
        <View style = {styles.container}>
            {/* <Text style={styles.text}>Loc: {text}</Text> */}
            <Text style={styles.text}>Timings : </Text>
            <PrayerCard prayer={"Fajr"} time={timings.Fajr}/>
            <PrayerCard prayer={"Dhuhr"} time={timings.Dhuhr}/>
            <PrayerCard prayer={"Asr"} time={timings.Asr}/>
            <PrayerCard prayer={"Maghrib"} time={timings.Maghrib}/>
            <PrayerCard prayer={"Isha"} time={timings.Isha}/>
            <Text style={styles.text}>Upcoming : </Text>
            <UpcomingCard upcoming={upcoming}/>


        </View>
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
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
        fontSize:22,
        color:"black",
        textAlign:"center",
        fontWeight:"bold",
        marginVertical:10
    }
})