import { useReducer } from "react"
import { todoReducer } from "./TodoReducer"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"

export const TodoApp = () => {

  const initialState= [
    {
      id: new Date().getTime(),
      description: 'Aprender React',
      done: false
    },
    {
      id: new Date().getTime() + 1000,
      description: 'Aprender Redux',
      done: false
    }
  ]

  // A un useReducer, se le manda el reducer que hemos creado, y un estado incial, en este caso, una lista de TODOS, y el reducer.
  const [ todos, dispatch] = useReducer( todoReducer, initialState)

  const handdleTodoAdd = (value) => {
    console.log('Componente principal',value)
  }


  return (
    <>
      <h1>TodoApp: 10,  <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}  /> 
        </div>

        <div className="col-5">
          <h4>Agregar TODO.</h4>
          <hr />
          <TodoAdd  emitTodoAdd={ (value) => handdleTodoAdd(value)}/>
        </div>
      </div>
    </>

  )
}
