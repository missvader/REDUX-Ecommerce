//aqui en el store es donde vamos a almacenar todos los estados globales de la app
import { configureStore } from '@reduxjs/toolkit'
//configureStore es una funcion que ya nos da la libreria 

//reducers
import userReducer from "../reducers/user/userSlice"
import cartReducer from "../reducers/cart/cartSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
})