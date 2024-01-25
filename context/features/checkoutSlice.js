import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    cart: []
  },
  reducers: {
    addToCard: (state, action) => {
      const {payload} = action;
      const item = {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        thumbnail: payload.thumbnail,
        stock: payload.stock
      }

      return {...state, cart: [...state.cart, item]};
    },
    clearCart: (state, _action) => {
      return {...state, cart: []};
    },
    removeItemCart: (state, action) => {
      const {payload} = action
  
      return {...state, cart: state.cart.filter(item => item.id !== payload.id)}
    }
  }
})

export const { addToCard, clearCart, removeItemCart } = checkoutSlice.actions
export default checkoutSlice.reducer
