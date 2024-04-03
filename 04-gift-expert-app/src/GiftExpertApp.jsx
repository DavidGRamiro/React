
// Crear un nuevo funcional componente con snipets escribiendo rafc

import { useState } from "react"

export const GiftExpertApp = () => {

  const [categories, setCategories] =  useState([ 'Motorbikes', 'Cars', 'Cats']);
  const addCategories = () => {
    // Añadir una nueva categoria
    // Hacemos una copia de las categorias que ya tenemos
    setCategories([ 'Dogs', ...categories])
    
  }
  
  return (
    <>
      <h1>Gift Expert App</h1>
      
      <input></input>
      
      <button onClick={addCategories}>Añadir</button>
      <ol>
        { 
        categories.map( category => { 
          return  <li key={category}>{ category }</li>
        }) 
        }
      </ol>
    </>

  )
}

