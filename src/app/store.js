import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../features/vehicleSlice';

export const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
  },
});
