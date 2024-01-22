import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: [],
  reducers: {
    addToCard: (state, action) => {
      const {payload} = action;
      const item = {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        thumbnail: payload.thumbnail
      }
      state.push(item)
    },
    clearCart: (state, action) => {
      state = []
      return state;
    }
  }
})

export const { addToCard, clearCart } = checkoutSlice.actions
export default checkoutSlice.reducer
