import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/counter/CounterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'


export const store = configureStore({
  reducer: {
    counter  : CounterSlice,
    pokemons: pokemonSlice
  },
})