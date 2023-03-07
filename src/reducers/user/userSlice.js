import { createSlice } from '@reduxjs/toolkit'
//createSlice es una función que permite crear el estado inicial de un estado y los reducers que vamos a utilizar

const initialState = {
  email: "",
  fullName: "",
  token: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  //en el reducer, state toma el estado anterior y lo actualiza con el payload de la action
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
    },
    unsetUser: (state) => {
      state.email = "";
      state.fullName = "";
      state.token = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer