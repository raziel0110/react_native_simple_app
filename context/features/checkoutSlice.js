import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    cart: []
  },
  reducers: {
    addToCard: (state, action) => {
      const {payload} = action;
      let index = state.cart.findIndex(item => item.id === payload.id)
      if (index >= 0) {
        const newState = state
        state.cart[index] = {...state.cart[index], quantity: state.cart[index].quantity + 1}
        return newState;
      } else {
        const newItem = {
          id: payload.id,
          title: payload.title,
          price: payload.price,
          thumbnail: payload.thumbnail,
          stock: payload.stock,
          quantity: 1,
        }
  
        return {...state, cart: [...state.cart, newItem]};
      }
    },
    addQuantity: (state, action) => {
      const {payload} = action;
      const index = state.cart.findIndex(item => item.id === payload.id)
      if (index > -1) {
        const newState = state;
        newState.cart[index] = {...state.cart[index], quantity: state.cart[index].quantity + 1 }
        return newState
      }

      return state
    },
    removeQuantity: (state, action) => {
      const {payload} = action;
      const index = state.cart.findIndex(item => item.id === payload.id)
      if (index > -1 && state.cart[index].quantity > 1) {
        const newState = state;
        newState.cart[index] = {...state.cart[index], quantity: state.cart[index].quantity - 1 }
        return newState
      }

      return state
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

export const { addToCard, clearCart, removeItemCart, addQuantity, removeQuantity } = checkoutSlice.actions
export default checkoutSlice.reducer
