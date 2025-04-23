import { pokemonApi } from "../../../../api/pokemonAPI"
import { setPokemons, startLoadinPokemons } from "./pokemonSlice"


// Es una funcion que retorna una funcion asincrona , que cuando se resuelva, va a llamar a las diferentes acciones.
export const getPokemons = ( page=0) => {
  
  return async( dispatch, getState ) => {
    dispatch(startLoadinPokemons())

    // TODO: Hacer la peticion http
    // const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    // const data = await respuesta.json()  

    // Ejemplo con la libreria de axios. Hemos tenido que crear una archivo llamado pokemonAPi.js
    const { data } =  await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)

    dispatch(setPokemons( { pokemons: data.results, page: page + 1 } ))



  }

}