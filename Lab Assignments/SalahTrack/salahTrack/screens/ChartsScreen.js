import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from "react";
import {BarChart, PieChart} from "react-native-gifted-charts"
import { usePrayerContext } from './PrayerContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector,useDispatch } from 'react-redux';
import { setPrayerData,setSelectedDate,updatePrayer } from '../store/prayerSlice';

function ChartScreen(){

    const prayerData = useSelector((state)=> state.prayers.prayerData);

    const selectedDate = useSelector((state)=> state.prayers.selectedDate);

    const dispatch = useDispatch();



    // const { selectedDate, prayerData } = usePrayerContext();

    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const loadData = async () => {
            const storedData = await AsyncStorage.getItem("prayerData");
            if (storedData) {
                dispatch(setChartData(JSON.parse(storedData)));
            }
        };
        loadData();
    }, [dispatch]);

    // console.log(chartData);

    const getPrayerChartData = (date) => {
        const data = chartData[date];

        if (!data) return []; //if data undefined return empty array

        const prayerValues = {
            "Alone": 1,
            "Jamat": 1,
        };

        return [
            { value: prayerValues[data["Fajr"]] || 0 },
            { value: prayerValues[data["Zuhar"]] || 0 },
            { value: prayerValues[data["Asr"]] || 0 },
            { value: prayerValues[data["Maghrib"]] || 0 },
            { value: prayerValues[data["Isha"]] || 0 },
        ];
    };

    const xLab = ["Fajr ", "Zuhar   ", "Asr ", "Maghrib      ", "Isha "];
    const yLab = [0, 1, 2, 3, 4, 5];

    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.barView}>
                    <BarChart
                        data={getPrayerChartData(selectedDate)}
                        horizontal
                        barWidth={50}
                        backgroundColor={"lightgreen"}
                        isAnimated
                        maxValue={1}
                        spacing={30}
                        noOfSections={1}
                        width={250}
                        xAxisLabelTexts={xLab}
                        yAxisLabelTexts={yLab}
                    />
                </View>
                <View style={styles.pieView}>
                    <PieChart
                        data={getPrayerChartData(selectedDate)}
                        donut
                        innerRadius={60}
                        style={styles.pieChart}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default ChartScreen;

const styles = StyleSheet.create({

    mainView:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
    },

    barView:{

        elevation:10,
        height:530,
        width:350,
        backgroundColor:"white",
        borderColor:"black",
        borderRadius:25,
        borderWidth:2
    },


    pieView:{
        height:280,
        width:300,
        marginTop:60,
        marginBottom:30,
        backgroundColor:"white",
        borderColor:"black",
        borderRadius:25,
        borderWidth:2,
        elevation:20,
        justifyContent:"center",
        alignItems:"center"
    },
    pieChart:{

        }
})