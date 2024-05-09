import { TodoList } from "./TodoList"
import { TodoForm } from "./TodoForm"
import { useTodo } from "../hooks/useTodo"

export const TodoApp = () => {

  
  const { todos, todosCount, pendingTodos, deleteTodo, onNewTodo, onToggleTodo } = useTodo()

  return (

    <>
      <h1>Todo App { todosCount}, <small>Pendientes { pendingTodos }</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
                  todos={ todos } 
                  onDeleteTodo={ deleteTodo } 
                  onToggleTodo={onToggleTodo}
          >
          </TodoList>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoForm onNewTodo={onNewTodo}></TodoForm>
        </div>
      </div>
    </>


  )
}
