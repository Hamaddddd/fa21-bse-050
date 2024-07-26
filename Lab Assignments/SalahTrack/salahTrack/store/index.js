import { configureStore } from '@reduxjs/toolkit';
import prayerReducer from './prayerSlice';

const store = configureStore({
  reducer: {
    prayers: prayerReducer,
  },
});

export default store;
