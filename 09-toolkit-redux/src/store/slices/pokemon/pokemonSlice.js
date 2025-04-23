import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState : {
    page:0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadinPokemons : (state) => {
      state.isLoading = true
    },
    setPokemons : (state, action) => {
      state.isLoading = false,
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  }
});

export const { startLoadinPokemons, setPokemons, nextPage} = pokemonSlice.actions
