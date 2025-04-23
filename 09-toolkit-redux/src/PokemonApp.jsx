import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getPokemons } from "./store/slices/pokemon/thunks"


export const PokemonApp = () => {
  
  const dispatch = useDispatch()
  
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

      <ul>
        <li>Hola</li>
        <li>Hola</li>
        <li>Hola</li>
      </ul>
    </>
  )
}
