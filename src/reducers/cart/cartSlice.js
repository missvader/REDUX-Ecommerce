import { createSlice } from '@reduxjs/toolkit'
//createSlice es una función que permite crear el estado inicial de un estado y los reducers que vamos a utilizar

const initialState = {
  totalCount : 0,
  productsList : [],
  totalPrice : 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  //en el reducer, state toma el estado anterior y lo actualiza con el payload de la action
  reducers: {
    addProductToCart : (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;
    },
    removeProductFromCart : (state, action) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(product => product.id !== productId);
    },
    totalProductsCart(state, action) {
      const arr = []
      state.productsList.map((product) => {
          const {cartQuantity } = product
          const singleProductQuantity = cartQuantity
          return arr.push(singleProductQuantity)
      })
      const totalQuantity = arr.reduce((acc, curr) => {
          return acc + curr
      }, 0)
      state.totalCount = totalQuantity
      console.log(totalQuantity)
  },
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart , removeProductFromCart, totalProductsCart} = cartSlice.actions

export default cartSlice.reducer