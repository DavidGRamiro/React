
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { useTodo } from "./hooks/useTodo"

export const TodoApp = () => {

  const { todos, deleteForm, doneTask, addToForm } = useTodo()

  return (
    <>
      <h1>TodoApp: 10 ,  <small>pendientes: 10</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} deleteItem={deleteForm} taskDone={doneTask}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO.</h4>
          <hr />
          <TodoForm  emitForm={addToForm}/>
        </div>
      </div>
    </>
  )
}
