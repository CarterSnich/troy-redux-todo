import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/tasker/taskerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
