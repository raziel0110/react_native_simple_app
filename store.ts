import {configureStore} from '@reduxjs/toolkit';
import checkoutReducer from './context/features/checkoutSlice';

export const store = configureStore({
  reducer: {
    cart: checkoutReducer
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;