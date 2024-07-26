import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
// import CircularProgress from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SalahCard from '../components/salahCard';
import React,{ useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { PrayerContext } from './PrayerContext';
import { usePrayerContext } from './PrayerContext';


// Parent func as it passes props to salahCard func (text,Alone,Jamat,oncheck function)
function CalendarScreen({navigation,route}){

    const { selectedDate, setSelectedDate, prayerData, setPrayerData } = usePrayerContext();


    const salahList = [{ name: "Fajr" }, { name: "Zuhar" }, { name: "Asr" }, { name: "Maghrib" }, { name: "Isha" }];

    // const [selectedDate,setSelectedDate] = useState("");
    // const [prayerData, setPrayerData] = useState({});
    const [aloneCount , setAloneCount] = useState();
    const [jamatCount , setJamatCount] = useState();


    // Function to handle checkbox click and store data in AsyncStorage
    const handleCheckboxClick = async (prayerName, status) => {

        const newData = {...prayerData}; //copy of prayerData in newData

        const currentStatus = newData[selectedDate] && newData[selectedDate][prayerName];
        //currentStatus will either have alone or jamat in it.

        if(currentStatus === status){
            delete newData[selectedDate][prayerName];
        }

        else{
            //updating/adding selectedDate in newData
        newData[selectedDate] = { 

            ...(prayerData[selectedDate] || {}), //making copy
            // searching for records in prayerData based on date, if no records then {}
            [prayerName] : status 
            // prayerName inside prayerData is setted to current prayer name 
        }

        

        }

        setPrayerData(newData);
        await AsyncStorage.setItem("prayerData", JSON.stringify(newData));
    }

    //first arg is the function to be performed when component mounts
    //second arg [] tells that effect should only run once when comp mounts
    useEffect(() => {
        // Load stored prayer data when component mounts
        const loadData = async () => {
            const storedData = await AsyncStorage.getItem("prayerData");
            if (storedData) { //stored data is not null and undefined then\
                //update prayerData state to the data setted above
                setPrayerData(JSON.parse(storedData)); 

            }
        };
        loadData();
    }, []);

    const renderSalahCards = () => {
        return salahList.map((salah, index) => {
            const prayerInfo = prayerData[selectedDate] || {};
            return (
                <SalahCard
                    key={index}
                    text={salah.name}
                    aloneChecked={prayerInfo[salah.name] === "Alone"}
                    jamatChecked={prayerInfo[salah.name] === "Jamat"}
                    onCheckboxClick={handleCheckboxClick}
                />
            );
        });
    }



    const getStreakCount = (startDate) => {
        let streak = 0;
        let currentDate = new Date(startDate);
        const today = new Date().toISOString().split('T')[0]; // Today's date 
    
        // Ensure startDate is a valid date string
        if (!isNaN(currentDate.getTime())) {
            // Iterate through dates before today
            while (prayerData[currentDate.toISOString().split('T')[0]] && currentDate.toISOString().split('T')[0] < today) {               
                 const dayData = prayerData[currentDate.toISOString().split('T')[0]];
                 if (Object.keys(dayData).length === 5) {
                    streak++;
                } else {
                    streak = 0;
                }
    
                // Increment currentDate
                currentDate.setDate(currentDate.getDate() + 1); //setting current +1 in current date
            }
        }
    
        return streak;
    };
    
    
    const streakCount = getStreakCount(Object.keys(prayerData)[0]);
        // const streakCount = 10;






    return(
        <ScrollView>
            <View>
                <Calendar
                    style={styles.calendar}
                    onDayPress={(day)=>{
                        setSelectedDate(day.dateString);
                    }}
                    markedDates={{
                        [selectedDate] : {
                            selected:true,
                            selectedDotColor:"blue",
                            selectedColor:"black",
                            disableTouchEvent:true
                        }

                        // ...(selectedDate && {
                        //     [selectedDate]: {
                        //         selected: true,
                        //         selectedDotColor: "blue",
                        //         selectedColor: "black",
                        //         disableTouchEvent: true
                        //     }
                        // })
                    }}
                />
                {renderSalahCards()}

                

        <AnimatedCircularProgress
                prefill={streakCount}
                
                duration={1000}
                size={250}
                width={15}
                backgroundWidth={12}
                fill={streakCount}
                delay={1000}
                tintColor="lightgreen"
                backgroundColor="#3d5875" 
                

                onAnimationComplete={() => {
                    
                }}



                style={styles.circleProgress}>

                {
                    (fill) => (
                        
                    <View style={styles.streakView}>
                        <Text style={styles.streakText} > Streak</Text>
                        {/* <Text style={styles.streakText}>      {Math.round(fill)/20}</Text> */}
                        <Text style={styles.streakText}>      {streakCount}</Text>

                    </View>    
                      
                        
                      
                    )
                  }
                
                
                </AnimatedCircularProgress>

                <Pressable style={styles.goToChart}
                
                onPress={()=>{navigation.navigate("Tabs")}}
                
                >
                    <Text style={styles.nextBtnText}>
                        {/* {AsyncStorage.getItem("date")} */}
                        Multiple Days Progress  ➡</Text>
                </Pressable>

                
        </View>
        </ScrollView>
        
        
        
        
    )
}


export default CalendarScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },

    circleProgress:{
        marginVertical:30,
        alignItems:"center",
        justifyContent:"center"
    },
    calendar:{
        marginTop:10,
        marginBottom:20,
        
        
    },

    nextBtnText:{
        fontSize:16,
        fontWeight:"bold",
        margin:10,
        color:"white"
    },

    goToChart:{
        height:"auto",
        width:"auto",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:30,
        marginHorizontal:40,
        backgroundColor:"black",
        borderRadius:15
    },
    streakText:{
        fontSize:25,
        fontWeight:"bold"
        
    },

    streakView:{
        // justifyContent:"center",
        // alignItems:"center",
        marginLeft:100,
        
    }

  });