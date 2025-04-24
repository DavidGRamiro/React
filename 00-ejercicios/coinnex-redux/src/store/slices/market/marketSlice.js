import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: [],
  page: 0
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    startLoadingData : ( state) => {
      state.isLoading = true;
    },

    setMarketData : (state, action) => {
      state.data = action.payload.data
      state.isLoading = false
      state.page = 0
    }
  }
});

export const { startLoadingData, setMarketData } = marketSlice.actions
