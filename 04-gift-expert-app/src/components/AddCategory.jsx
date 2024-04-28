import { useState } from "react"
import PropTypes from 'prop-types'

// export function AddCategory({ setCategories }) {
  // eslint-disable-next-line react/prop-types
export function AddCategory({ onNewCategory }) {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // Forma de utilizarlo en el caso de que recibamos la funcion del padre.
  const onSubmit = (e) => {
    // Evitamos que se recarge el navegador
    e.preventDefault();
    //  Evistamos que se añada un valor vacio o de una sola letra.
    if( inputValue.trim().length <= 1) return;
    //  Añadimos a las categorias el nuevo valor.
    setCategories( categories => [inputValue, ...categories])
    // Después de añadirlo, borramos el input
    setInputValue('')
  }

  // Forma de utilizarlo en el caso de que recibamos la funcion del padre.
  const onSubmitConEvento = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1) return;
    onNewCategory( inputValue )
    // Después de añadirlo, borramos el input
    setInputValue('')
  }

  return (
      <form onSubmit={onSubmitConEvento} aria-label="form"> 
        <input type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={onInputChange}>
        </input>
      </form>

    )
}


AddCategory.propTypes = {
  onNewCategory : PropTypes.func.isRequired
}
