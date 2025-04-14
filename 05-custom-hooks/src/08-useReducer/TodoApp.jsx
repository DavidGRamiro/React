
import { TodoList } from "./components/TodoList"
import { TodoAdd } from "./components/TodoAdd"
import { useTodo } from "./hooks/useTodo"


export const TodoApp = () => {
  
  // Tarea FINAL:
  // Previamente, todo lo que encontramos en nuestro customHook, useTodo, estaba aqui. Creamos un customHook para que sea fácil de leer nuestro componente.
  const { todos, handdleTodoAdd, handdledDeleteTodo, handdleToggleTodo, penddingTodosCount, todosCount } = useTodo()
  


  return (
    <>
      <h1>TodoApp: {todosCount} ,  <small>pendientes: {penddingTodosCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}  onDeleteTodo={handdledDeleteTodo} onToggleTodo={handdleToggleTodo} /> 
        </div>

        <div className="col-5">
          <h4>Agregar TODO.</h4>
          <hr />
          <TodoAdd  emitTodoAdd={ handdleTodoAdd} />
        </div>
      </div>
    </>

  )
}
