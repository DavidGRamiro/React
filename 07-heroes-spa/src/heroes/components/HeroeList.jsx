import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeoCard } from './HeoCard'

export const HeroeList = ( { publisher }) => {

  // Memorizamos la función, solo se disparara cuando el publisher cambie.
  const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher])

  return (

    <>
      <div className='row row-cols-1 row-cols-md-3 g-4' >
        { heroes.map( item => 
          
          <HeoCard  key={item.id}  {...item} />


        )}

      </div>
    </>


  )
}
