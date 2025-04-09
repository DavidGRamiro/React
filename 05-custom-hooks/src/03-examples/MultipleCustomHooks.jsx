import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {

  
  const { counter, sumar, restar} = useCounter(1)
  
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}` 
  const { data, isLoading, hasErrors, error } = useFetch(url);

  return (
    <>
      <h1>Información de Pokemons</h1>
      <hr />

      { isLoading ? 
        <LoadingMessage/> :  
        <PokemonCard id={data?.id} name={data?.name} sprites={[ data.sprites.front_default]} />
      }

      <h3> { 'Error '&& error }</h3>

      <button className='btn btn-primary mt-2' onClick={restar}>Anteriores</button>
      <button className='btn btn-primary mt-2' onClick={ () => sumar(1)}>Siguiente</button>
    
    </>
  )
}
