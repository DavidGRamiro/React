import { useState } from "react"

export const Search = ( { onChangeListItems }) => {

  const [inputValue, setInputValue] = useState('Pikachu')


  const onInputChange = (event) => {
    const valor = event.target.value;
    setInputValue(valor)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onChangeListItems(inputValue)
    // Emitimos el valor al componente padre.
    // Limpiamos el formulario de busqueda. 
    setInputValue('')
  }


  return (

    <>
    <form onSubmit={onSubmit}>

      <input 
          type="text" 
          value={inputValue}
          placeholder="Búsqueda de Pokemon"  
          onChange={onInputChange} />
    </form>
    </>

  )
}
