import { useEffect, useReducer } from "react"
import { todoReducer } from "../08 - useReducer/TodoReducer"


const init = () => {
  return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodo = () => {
  
  const [ todos , dispatch] = useReducer( todoReducer ,  [] , init)
  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])

  const onNewTodo = (todo) => {
    const action = {
      type : 'POST',
      payload : todo
    }
    dispatch(action)
  }

  const deleteTodo = ( id ) => {
    const action = {
    type: 'DELETE',
    payload : id
    } 
    dispatch(action)
  }
  
  const onToggleTodo = ( id ) => {
    const action = {
      type: 'TODO Toggle',
      payload : id
      } 
      dispatch(action)
  }

  return {
    todos,
    onNewTodo,
    deleteTodo,
    onToggleTodo,
    todosCount : todos.length,
    pendingTodos : todos.filter( todo => !todo.done).length
  }


}
