import { createSlice } from '@reduxjs/toolkit'

// Vamos a definir 3 tipos de status, Checking, No autenticado, y autenticado
const initialState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL : null,
  errorMessage:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {},
    logout : (state, payload) => {},
    checkingCredentials : (state) => {
      state.status = 'checking'
    }
  }
});

export const { login, logout, checkingCredentials} = authSlice.actions
