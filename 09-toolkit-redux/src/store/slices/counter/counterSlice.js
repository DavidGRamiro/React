import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState : { 
    counter: 10 
  },
  reducers: {
    incrementBy2 :  (state, action) => {
      state.counter += action.payload
    },
    increment: (state) => {
      state.counter += 1
    },
    decrement : (state) => {
      state.counter -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy2 } = counterSlice.actions