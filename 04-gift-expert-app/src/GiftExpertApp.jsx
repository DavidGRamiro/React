import { useState } from "react"
import { AddCategory, GiftGrid } from "./components"

export const GiftExpertApp = () => {


  const [categories, setCategories] = useState(['Valentino Rossi'])

  const onAddcategory = (newValue) => {
    // En React no funciona para cambiar el estado
    // categories.push('Sito Pons')
    // Anteriormente teniamos un boton, y de esta forma llamavamos a esta funcion e incluiamos un items.
    // setCategories( [ 'Marco Simochelli', ...categories ] )
    
    const toLowerCaseName = categories.map( item => item.toLocaleLowerCase())

    // Esta validaci'on lo hacemos para distinguir de si son mayusculas o minisculas. Aun que sean mayusculas, y el nombre sea igual, no lo insertamos
    if(toLowerCaseName.includes(newValue.toLocaleLowerCase())) return;
    else 
      setCategories([ newValue, ...categories])

  }


  return (

    <>
      <h1>Gift Expert App</h1>

      <AddCategory
        // * El p[rimer set categories es una propiedad del compoennte, la segunda es la funcion que le mandamos de este mismo componente (GiftExpertApp)]
        // Una forma de hacer que se incluyan las categorias.
        // setCategories = { setCategories} 
        // Emision del componente Addcategory a el componente GiftExperApp (actual)
        onNewCategory= { onAddcategory }
      />
      
      {/* Llamnos al GriftGrid, donde por mediante un map, mostramos todas las categorias y gifts de que buscamos.
      Aun que en el componente GiftGrid no declaramos la llave, React lo sabe por defecto. */}
      {
        categories.map((category ) => (
          <GiftGrid key={category}  category={category} />
        ))
      }

    </> 
  )
}
