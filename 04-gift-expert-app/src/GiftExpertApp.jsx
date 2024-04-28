
// Crear un nuevo funcional componente con snipets escribiendo rafc

import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] =  useState([ '']);
  const addCategories = ( newCategory) => {
    // Añadir una nueva categoria
    // Si la categoria ya esta incluida en la lista, no lo incluimos.
    if( categories.includes(newCategory)) return;

    // Hacemos una copia de las categorias que ya tenemos
    setCategories([ newCategory  , ...categories])
    
  }
  
  return (
    <>

      <h1 aria-label="titulo" id="titulo">GIPHY</h1>
      <AddCategory onNewCategory={  addCategories }></AddCategory>

      { 
        categories.map( (category) => (<GiftGrid 
                                              key={ category }
                                              category={ category }
                                      >
                                      </GiftGrid>))
      }
    </>

  )
}

