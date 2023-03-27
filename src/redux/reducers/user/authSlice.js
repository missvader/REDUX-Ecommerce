import { createSlice } from '@reduxjs/toolkit'
//createSlice es una función que permite crear el estado inicial de un estado y los reducers que vamos a utilizar

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  //en el reducer, state toma el estado anterior y lo actualiza con el payload de la action
  reducers: {
    setActiveUser: (state, action) => {
      state.isLoggedIn= true;
      state.email = action.payload.email;
      state.userName= action.payload.userName;
      state.userId = action.payload.userId;
    },
    removeActiveUser: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userId = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setActiveUser, removeActiveUser } = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectEmail = (state) => state.auth.email
export const selectUserName = (state) => state.auth.userName
export const selectUserID = (state) => state.auth.selectUserID

export default authSlice.reducer