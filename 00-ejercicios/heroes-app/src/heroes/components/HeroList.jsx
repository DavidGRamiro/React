import React from 'react'
import { HeroCard } from './HeroCard'

export const HeroList = ( { heroes } ) => {
  return (

      <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          { heroes.map( item => 
            <HeroCard  key={item.id} { ...item } />
          ) }
        </div>
      
      </>

  )
}
