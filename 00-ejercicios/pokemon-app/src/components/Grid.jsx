import { useState } from "react"


export const Grid = ({ gridItems}) => {
  
  
  return (
      <>
        <ol>
          {
            gridItems.map( (item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ol>
      
      </>
  )
}
