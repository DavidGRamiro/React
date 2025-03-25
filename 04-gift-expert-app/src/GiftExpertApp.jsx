import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GiftExpertApp = () => {


  const [categories, setCategories] = useState(['Valentino Rossi', 'Marc Marquez'])

  const onAddcategory = (newValue) => {
    // En React no funciona para cambiar el estado
    // categories.push('Sito Pons')
    // Anteriormente teniamos un boton, y de esta forma llamavamos a esta funcion e incluiamos un items.
    // setCategories( [ 'Marco Simochelli', ...categories ] )
    setCategories([ newValue, ...categories])

  }


  return (

    <>
      <h1>Gift Expert App</h1>


      {/* INPUT */}
      {/* El p[rimer set categories es una propiedad del compoennte, la segunda es la funcion que le mandamos de este mismo componente (GiftExpertApp)] */}
      <AddCategory 
        // Una forma de hacer que se incluyan las categorias.
        // setCategories = { setCategories} 

        // Emision del componente Addcategory a el componente GiftExperApp (actual)
        onNewCategory= { onAddcategory }
      />


      <ol>
        { categories.map(category => {
          return <li key={category}>{category}</li>
          }) 
        }
      </ol>
    </> 
  )
}
