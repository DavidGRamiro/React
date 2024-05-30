import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/counter/CounterSlice'


export const store = configureStore({
  reducer: {
    counter  : CounterSlice
  },
})