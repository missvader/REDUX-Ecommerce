import { createSlice } from '@reduxjs/toolkit'
//createSlice es una función que permite crear el estado inicial de un estado y los reducers que vamos a utilizar

const initialState = {
  totalCount : 0,
  productsList : [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  //en el reducer, state toma el estado anterior y lo actualiza con el payload de la action
  reducers: {
    addProductToCart : (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer