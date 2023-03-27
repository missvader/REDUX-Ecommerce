import { createSlice } from '@reduxjs/toolkit'
//createSlice es una función que permite crear el estado inicial de un estado y los reducers que vamos a utilizar

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  
  //en el reducer, state toma el estado anterior y lo actualiza con el payload de la action
  reducers: {
    addToCart : (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        //el producto ya está en cart
        itemInCart.quantity++;
        state.cartTotalQuantity += 1;
      }else {
        //no estaba en cart, agregamos nuevo producto
        state.cartItems.push({...action.payload, quantity: 1});
        state.cartTotalQuantity += 1;
      }
    },
    incrementQuantity : (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
      state.cartTotalQuantity += 1;
    },
    decrementQuantity : (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
        state.cartTotalQuantity > 0 ? state.cartTotalQuantity -= 1 : state.cartTotalQuantity = 0;
      }else {
        item.quantity--;
        state.cartTotalQuantity -= 1;
      }
    },
    removeItem : (state, action) => {
      //filtramos para que devuelva solo los items diferentes al que queremos eliminar y actualizamos estado cart
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
      let total = 0;
      state.cartItems = removeItem;
      state.cartItems.map(item => {
        total += item.quantity
      })
      state.cartTotalQuantity = total;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer