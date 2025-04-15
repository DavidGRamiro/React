
import { useReducer } from "react"
import { formReducer } from "./formReducer"


export const useTodo = () => {

  // Creacion de los TODOS.
  const [todos, dispatch] = useReducer( formReducer , [])

  // Recibimos el emitter desde el Formulario
  const addToForm = (value) => {
    const action = {
      type: 'add',
      payload: value
    }
    dispatch(action)
  }
  
  const deleteForm = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }
    dispatch(action) 
  }

  const doneTask = (id) => {
    const action ={
      type: 'done',
      payload: id
    }
    dispatch(action)
  }

  return {
    todos,
    addToForm,
    deleteForm,
    doneTask
  }


}
