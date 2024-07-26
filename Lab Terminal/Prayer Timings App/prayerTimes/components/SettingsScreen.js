import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useTimingContext } from './TimingContext';

function SettingsScreen({ navigation }) {

    const { school, setSchool, method, setMethod } = useTimingContext();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(school);
    const [items, setItems] = useState([
        { label: "Shafi", value: 0 },
        { label: "Hanafi", value: 1 }
    ]);

    const [open1,setOpen1] = useState(false);
    const [value1,setValue1] = useState(method);
    const [methods1,setMethods1] = useState([
        {label:"University of Islamic Sciences, Karachi",value:1},
        {label:"Islamic Society of North America",value:2},
        {label:"Muslim World League",value:3},
        {label:"Umm Al-Qura University, Makkah",value:4},
        {label:"Egyptian General Authority of Survey",value:5},
        {label:"Institute of Geophysics, University of Tehran",value:7},
        {label:"Gulf Region",value:8},
        {label:"Kuwait",value:9},
        {label:"Qatar",value:10},
        {label:"Majlis Ugama Islam Singapura, Singapore",value:11},
        {label:"Union Organization islamic de France",value:12},
        {label:"Diyanet İşleri Başkanlığı, Turkey",value:13},
        {label:"Spiritual Administration of Muslims of Russia",value:14},
        {label:"Moonsighting Committee Worldwide (also requires shafaq parameter)",value:15},
        {label:"Dubai (unofficial)",value:16},

    ]);


    useEffect(() => {
        setSchool(value);

        if (value != school) {
            navigation.push("Home");
        }

    }, [value]);

    useEffect(()=>{
        setMethod(value1);
        // console.log(method);
        if(value1 != method){
            navigation.push("Home");
        }
    },[value1]);



    // console.log(school);


    return (
        <View style={styles.container}>
            
            {/* Card 1 -- School */}
            <View style={styles.mainView}>
                <View style={styles.subView}>
                    <View style={styles.textView1}>
                        <Text style={styles.text}>School :</Text>
                    </View>
                    <View style={styles.spacing}></View>
                    <View style={styles.textView2}>
                        <DropDownPicker
                            open={open}
                            setOpen={setOpen}
                            value={value}
                            setValue={setValue}
                            items={items}
                            setItems={setItems}
                            placeholder='Select'
                            
                        />
                    </View>
                </View>
            </View>

            {/* Card 2 -- Method */}
            
            <View style={styles.mainView}>
                <View style={styles.subView}>
                    <View style={styles.textView1}>
                        <Text style={styles.text}>Method :</Text>
                    </View>

                    <View style={styles.spacing}></View>

                    <View style={styles.textView2}>
                        <DropDownPicker
                            open={open1}
                            setOpen={setOpen1}
                            value={value1}
                            setValue={setValue1}
                            items={methods1}
                            setItems={setMethods1}
                            maxHeight={370}
                            disableBorderRadius={true}
                            // autoScroll={true}
                            labelProps={{numberOfLines:2}}
                            // zIndex={1000}
                        />
                    </View>
                </View>
            </View>





        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    mainView: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: "center",
        width: 330,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#349eeb",
        elevation: 10,
        marginBottom: 80
    },
    subView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textView1: {
        // marginLeft: 5,
        width: 130,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    textView2: {
        marginRight: 5,
        width: 130,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
    },
    spacing: {
        marginHorizontal: 20
    },
    
    
    
    
    

});
