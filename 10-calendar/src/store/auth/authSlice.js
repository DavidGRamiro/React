import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking',
  user: {},
  errorMessage : undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking',
      state.user = {},
      state.errorMessage = undefined 
    },
    onLoggin : (state, { payload }) => {
      state.status = 'authenticated',
      state.user = payload,
      state.errorMessage = undefined
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-autenticathed',
      state.user = {}
      state.errorMessage = payload
    },
    clearErrorMessage : (state) => {
      state.errorMessage = undefined
    }
  }
});

export const { onChecking, onLoggin, onLogout, clearErrorMessage} = authSlice.actions
