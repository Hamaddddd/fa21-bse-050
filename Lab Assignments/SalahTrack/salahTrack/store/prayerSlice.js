

// src/store/prayerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prayerData: {},
  selectedDate: '',
};

const prayerSlice = createSlice({
  name: 'prayers',
  initialState,
  reducers: {
    setPrayerData: (state, action) => {
      state.prayerData = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    updatePrayer: (state, action) => {
      const { date, prayerName, status } = action.payload;
      if (!state.prayerData[date]) {
        state.prayerData[date] = {};
      }
      state.prayerData[date][prayerName] = status;
    },
  },
});

export const { setPrayerData, setSelectedDate, updatePrayer } = prayerSlice.actions;
export default prayerSlice.reducer;
