// PrayerContext.js
import React, { createContext, useState, useContext } from 'react';

export const PrayerContext = createContext();

export const PrayerProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [prayerData, setPrayerData] = useState({});

    return (
        <PrayerContext.Provider value={{ selectedDate, setSelectedDate, prayerData, setPrayerData }}>
            {children}
        </PrayerContext.Provider>
    );
};

export const usePrayerContext = () => useContext(PrayerContext);
