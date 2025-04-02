import { useState } from "react"


export const Grid = ({ gridItems}) => {
  
  
  return (
      <>
        <ol>
          {
            gridItems.map( (item) => (
              <li key={item}>{item}</li>
            ))
          }
        </ol>
      
      </>
  )
}
