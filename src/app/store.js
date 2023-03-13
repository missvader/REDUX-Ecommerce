//aqui en el store es donde vamos a almacenar todos los estados globales de la app
import { configureStore } from '@reduxjs/toolkit'
//configureStore es una funcion que ya nos da la libreria 

//reducers
import authReducer from "../reducers/user/authSlice"
import cartReducer from "../reducers/cart/cartSlice"

export const store = configureStore({
  reducer: {
    user: authReducer,
    cart: cartReducer
  },
})