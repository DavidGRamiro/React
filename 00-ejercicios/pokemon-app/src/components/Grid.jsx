import { useState } from "react"
import { Info } from "./Info"


export const Grid = ({ pokemons }) => {
  
  
  return (
      <>
        <div>
          { pokemons.map((item, index) => (
            <div key={index}>
              <h2>{item}</h2>
              <hr />
              <Info pokemon={item}/>
            </div>
          ))  }
        </div>
      </>
  )
}
