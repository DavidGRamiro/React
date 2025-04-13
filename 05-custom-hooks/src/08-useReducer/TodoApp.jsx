import { useEffect, useReducer } from "react"
import { todoReducer } from "./TodoReducer"
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"


const initialState= [
  // {
  //   id: new Date().getTime(),
  //   description: 'Aprender React',
  //   done: false
  // },
  
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}


export const TodoApp = () => {


  // A un useReducer, se le manda el reducer que hemos creado, y un estado incial, en este caso, una lista de TODOS, y el reducer.
  // Init, es el tercer parametro, que es como incializar el estado del reducer. En este caso, estamos tomando los estados del localStorage
  const [ todos, dispatch] = useReducer( todoReducer, initialState, init)
  
  // Tenemos la necesidad, de que cuando nuestra lista de Todos createImageBitmap, disparar un effecto,
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])
  
  const handdleTodoAdd = (value) => {
    const action = {
      type: '[TODO] add Todo',
      payload: value
    }
    // Llamamos al reducer con el Dispatch. Esto llamara a nuestro todoReducer,y esto
    // evaluara en el switch el tipo de action que le hemos pasado.
    // Retornara una nueva lista de Todos.
    dispatch( action )
  }

  const handdledDeleteTodo = (id) => {
    
    const action = {
      type: '[TODO] remove Todo',
      payload: id
    }
    dispatch( action )
  }


  return (
    <>
      <h1>TodoApp: 10,  <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}  onDeleteTodo={handdledDeleteTodo} /> 
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
