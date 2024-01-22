import {configureStore} from '@reduxjs/toolkit';
import checkoutReducer from './context/features/checkoutSlice';

export default configureStore({
  reducer: {
    cart: checkoutReducer
  },
})