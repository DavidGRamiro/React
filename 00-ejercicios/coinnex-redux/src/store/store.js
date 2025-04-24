
import { configureStore } from '@reduxjs/toolkit'
import { marketSlice } from './slices/market/marketSlice'

export const store = configureStore({
  reducer: {
    market: marketSlice.reducer
  }
})