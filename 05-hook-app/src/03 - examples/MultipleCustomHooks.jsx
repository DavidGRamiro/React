/* eslint-disable no-unused-vars */
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHooks = () => {

  const { sumar, restar, counter} = useCounter(1)
  const { data, hasErrors, isLoading, errorMessage } =  useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <pre>Pokemon Info </pre>
  
      { isLoading ? <LoadingMessage></LoadingMessage>
                  : <PokemonCard 
                              id={data.id} 
                              name={data.name} 
                              sprites={[ data.sprites.front_default, 
                                        data.sprites.front_shiny,
                                        data.sprites.back_default]}>
                    </PokemonCard> }
      
      <h3> { data?.name } </h3>

      

      <button className="btn btn-primary" onClick={   () => sumar() }>Siguiente</button>
      <button  className="btn btn-primary" 
              disabled={counter == 1 }
              onClick={ () => restar() } >Anterior</button>

    </>
  )
}
