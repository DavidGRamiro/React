import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from "./store/slices/pokemon/thunks"
import { nextPage } from "./store/slices/pokemon/pokemonSlice"


export const PokemonApp = () => {
  
  const dispatch = useDispatch()
  const { isLoading, pokemons, page } = useSelector( (state) => state.pokemons )

  // Si solo queremos que se ejecute una sola vez, llamamos al useEffect
  useEffect(() => {
    // La primera vez, disparamos la accion que queramos al iniciar. Esto hara cambiar el isLoading a false,
    // y tambien, obtendra de manera asincrona, a traves de los thunks, los pokemons
    dispatch( getPokemons() )
  }, [])
  
  
  
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading : { isLoading ?  'Cargando' : 'Terminado' }</span>

      <ul>
        { pokemons.map((item) => 
          <li key={item.name}>{item.name}</li>
        )}
      </ul>

      <button onClick={ () => dispatch(getPokemons(page))} >Next</button>

    </>
  )
}
