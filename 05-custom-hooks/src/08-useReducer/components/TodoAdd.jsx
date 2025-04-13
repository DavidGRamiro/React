import { useState } from "react"
import { useForm } from "../../hooks/useForm"

export const TodoAdd = ( { emitTodoAdd} ) => {


  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = (event) => {
    event.preventDefault()

    if(description.length <= 5) return
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    emitTodoAdd(newTodo)
    onResetForm()
  }


  return (
    <>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="description" placeholder="Que hay que hacer ?" className="form-control" value={description} onChange={onInputChange}  />
          <button type="submit" className="btn btn-outline-primary mt-1" >Agregar</button>
        </form>
    
    
    </>
  )
}
