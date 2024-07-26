import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChartScreen from "./ChartsScreen";
import WeeklyChartScreen from "./WeeklyChartScreen";
import MonthlyChartScreen from "./MonthlyChartsScreen";
import { Ionicons,AntDesign } from "@expo/vector-icons";

function Tabs(){

    const Tab = createBottomTabNavigator();

    return(
       <Tab.Navigator 
       initialRouteName="Daily"
       >

        <Tab.Screen name="Daily" component={ChartScreen} 
        options={{
            title:"Daily Progress", 
            headerTintColor:"black",
            headerShown:true,
            headerTitleAlign:"center",
            tabBarIcon:({color})=><Ionicons name="home" color={color} size={20} />
        
        }}/>
        <Tab.Screen name="7 Days View" component={WeeklyChartScreen} 
        options={{
            title:"Weekly Progress", 
            headerTintColor:"black",
            headerShown:true,
            headerTitleAlign:"center",
      
            tabBarIcon:({color})=><AntDesign name="piechart" color={color} size={20} />


        
        }}/>

        <Tab.Screen name="30 Days view" component={MonthlyChartScreen} 
        options={{
            title:"Monthly Progress", 
            headerTintColor:"black",
            headerShown:true,
            headerTitleAlign:"center",
       
            tabBarIcon:({color})=><AntDesign name="areachart" color={color} size={20} />

        
        }}/>

       </Tab.Navigator>
    );

}

export default Tabs;