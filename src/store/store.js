import { configureStore } from '@reduxjs/toolkit';
import FlipCardReducer from './slices/FlipCardSlice';

export const store = configureStore({
  reducer: {
    flipCard: FlipCardReducer
  },
});
