/* eslint-disable react/prop-types */

import { useForm } from "../hooks/useForm"



export const TodoForm = ({ onNewTodo  }) => {

  const {descripcion , onInputChange , onResetForm}  = useForm({
    descripcion: ''
  })

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(descripcion.length !== 0){
      const newTodo = {
        id : new Date().getTime(),
        descripcion : descripcion,
        done : false
      }
      onNewTodo(newTodo)
      onResetForm()
    }
  }

  return (
    <>
    <form onSubmit={onFormSubmit}>
      <input type="text"
            placeholder="Que hay que hacer ?"
            value={ descripcion }
            name="descripcion"
            onChange={onInputChange}
            className="form-control" />

      <button className="btn btn-primary mt-2"
              type="submit"> 
              Agregar 
      </button>
    </form>
    </>
  )
}
