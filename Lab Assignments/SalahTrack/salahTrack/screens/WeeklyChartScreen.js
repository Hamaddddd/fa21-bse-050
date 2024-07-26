import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { BarChart, PieChart } from 'react-native-gifted-charts';
import {usePrayerContext } from './PrayerContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector,useDispatch } from 'react-redux';
import { setPrayerData,setSelectedDate,updatePrayer } from '../store/prayerSlice';

function WeeklyChartScreen() {

    const prayerData = useSelector((state)=> state.prayers.prayerData);

    const selectedDate = useSelector((state)=> state.prayers.selectedDate);

    const dispatch = useDispatch();


    // const { selectedDate } = usePrayerContext();
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const loadData = async () => {
            const storedData = await AsyncStorage.getItem('prayerData');
            if (storedData) {
                dispatch(setChartData(JSON.parse(storedData)));
            }
        };
        loadData();
    }, [dispatch]);

    const getWeeklyPrayerChartData = (sDate) => {
        const dates = Object.keys(chartData).sort();
        const selectedDateIndex = dates.indexOf(sDate);
        const startDateIndex = Math.max(0, selectedDateIndex - 6);
        const last7Dates = dates.slice(startDateIndex, selectedDateIndex + 1);

        const prayerCounts = {
            Fajr: 0,
            Zuhar: 0,
            Asr: 0,
            Maghrib: 0,
            Isha: 0,
        };

        last7Dates.forEach(date => {
            const data = chartData[date];
            if (data) {
                prayerCounts.Fajr += data.Fajr === 'Alone' || data.Fajr === 'Jamat' ? 1 : 0;
                prayerCounts.Zuhar += data.Zuhar === 'Alone' || data.Zuhar === 'Jamat' ? 1 : 0;
                prayerCounts.Asr += data.Asr === 'Alone' || data.Asr === 'Jamat' ? 1 : 0;
                prayerCounts.Maghrib += data.Maghrib === 'Alone' || data.Maghrib === 'Jamat' ? 1 : 0;
                prayerCounts.Isha += data.Isha === 'Alone' || data.Isha === 'Jamat' ? 1 : 0;
            }
        });

        return [
            { value: prayerCounts.Fajr },
            { value: prayerCounts.Zuhar },
            { value: prayerCounts.Asr },
            { value: prayerCounts.Maghrib },
            { value: prayerCounts.Isha }
        ];
    };

    const xLab = ['Fajr ', 'Zuhar   ', 'Asr ', 'Maghrib      ', 'Isha '];
    const yLab = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.barView}>
                    <BarChart
                        data={getWeeklyPrayerChartData(selectedDate)}
                        horizontal
                        barWidth={50}
                        backgroundColor={'lightgreen'}
                        isAnimated
                        maxValue={7}
                        spacing={30}
                        noOfSections={7}
                        width={250}
                        xAxisLabelTexts={xLab}
                        yAxisLabelTexts={yLab}
                    />
                </View>

                <View style={styles.pieView}>
                    <PieChart
                        data={getWeeklyPrayerChartData(selectedDate)}
                        donut
                        innerRadius={60}
                        style={styles.pieChart}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default WeeklyChartScreen;

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    barView: {
        elevation: 10,
        height: 530,
        width: 350,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 25,
        borderWidth: 2,
    },
    pieView: {
        height: 280,
        width: 300,
        marginTop: 60,
        marginBottom: 30,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 25,
        borderWidth: 2,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieChart: {},
});
