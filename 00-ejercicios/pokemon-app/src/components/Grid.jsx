import { useState } from "react"
import { Info } from "./Info"


export const Grid = ({ pokemons }) => {
  
  console.log('GRID item',pokemons)
  
  return (
      <>
        <div>
          { pokemons.map((item, index) => (
            <div key={index}>
              <h2>{item}</h2>
              <Info />
            </div>
          ))  }
        </div>
      </>
  )
}
