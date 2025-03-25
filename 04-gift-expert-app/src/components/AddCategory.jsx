import { useState } from "react"



export const AddCategory = ({setCategories, onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState('Valentino Rossi')
  
  const onInputChange = (event) => {
      setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    // Validaciones. Texto vacío no inserta, y limpieza de input
    if(inputValue === '') return
    // Para hacer la insercción de categorias, necesitamos las categorias anteriores.
    // Para evitar mandando en las props, accedemos al callback propio de la funcion setCategories y obtenemos todas.

    // Anteriomente utilizabamos la funcion propia del componente padre recibida por los Props, sel useState del componente GiftExpertApp
    // setCategories( categories => [inputValue, ...categories] )

    // Ahora emitimos el valor al padre con el valor del input
    onNewCategory(inputValue)

    setInputValue('')
  }


  return (
    <>

    <form onSubmit={onSubmit}>
      <input 
        value={ inputValue }
        type="text"
        placeholder="Buscar Gifts"
        onChange={ (event) => onInputChange(event) }

      />
    </form>

    </>
  )
}
