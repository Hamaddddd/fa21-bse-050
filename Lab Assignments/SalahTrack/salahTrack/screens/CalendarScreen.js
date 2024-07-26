import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SalahCard from '../components/salahCard';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from 'react-redux';
import { setPrayerData, setSelectedDate, updatePrayer } from '../store/prayerSlice';

function CalendarScreen({ navigation }) {

  const prayerData = useSelector((state) => state.prayers.prayerData);
  const selectedDate = useSelector((state) => state.prayers.selectedDate);
  const dispatch = useDispatch();

  const salahList = [{ name: "Fajr" }, { name: "Zuhar" }, { name: "Asr" }, { name: "Maghrib" }, { name: "Isha" }];
  
  const handleCheckboxClick = async (prayerName, status) => {
    const newData = { ...prayerData };
    const currentStatus = newData[selectedDate] && newData[selectedDate][prayerName];

    if (currentStatus === status) {
      delete newData[selectedDate][prayerName];
    } 
    
    else {
      newData[selectedDate] = {
        ...(prayerData[selectedDate] || {}),
        [prayerName]: status,
      };
    }

    dispatch(setPrayerData(newData));
    await AsyncStorage.setItem("prayerData", JSON.stringify(newData));
  };

  useEffect(() => {
    const loadData = async () => {
      const storedData = await AsyncStorage.getItem("prayerData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("Loaded prayer data from AsyncStorage:", parsedData);
        dispatch(setPrayerData(parsedData));
      } else {
        console.log("No prayer data found in AsyncStorage.");
      }
    };
    loadData();
  }, [dispatch]);

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
  };

  const getStreakCount = () => {
    const prayerDataKeys = Object.keys(prayerData).sort();

    if (prayerDataKeys.length === 0) {
      console.log("No prayer data available.");
      return 0;
    }

    const startDate = prayerDataKeys[1];
    console.log("Calculating streak count...");
    console.log("Start Date:", startDate);

    let streak = 0;
    let currentDate = new Date(startDate);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];

    console.log("Yesterday's Date:", yesterdayString);

    if (!isNaN(currentDate.getTime())) {
      while (currentDate.toISOString().split('T')[0] <= yesterdayString) {
        const currentDateString = currentDate.toISOString().split('T')[0];
        const dayData = prayerData[currentDateString];

        console.log("Checking Date:", currentDateString);
        console.log("Day Data:", dayData);

        if (dayData && Object.keys(dayData).length === 5) {
          streak++;
        } else {
          streak = 0;
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    console.log("Final Streak Count:", streak);
    return streak;
  };

  const streakCount = getStreakCount();

  return (
    <ScrollView>
      <View>
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => {
            dispatch(setSelectedDate(day.dateString));
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedDotColor: "blue",
              selectedColor: "black",
              disableTouchEvent: true,
            },
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
          style={styles.circleProgress}
        >
          {(fill) => (
            <View style={styles.streakView}>
              <Text style={styles.streakText}>Streak</Text>
              <Text style={styles.streakText}>     {streakCount}</Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <Pressable
          style={styles.goToChart}
          onPress={() => {
            navigation.navigate("Tabs");
          }}
        >
          <Text style={styles.nextBtnText}>Multiple Days Progress ➡</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  circleProgress: {
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    marginTop: 10,
    marginBottom: 20,
  },
  nextBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "white",
  },
  goToChart: {
    height: "auto",
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 40,
    backgroundColor: "black",
    borderRadius: 15,
  },
  streakText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  streakView: {
    marginLeft: 100,
  },
});
