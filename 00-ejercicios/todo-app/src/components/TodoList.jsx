import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], deleteItem , taskDone }) => {

  return (
    <>
      <ul className="list-group">
        { todos.map (( todo ) => 
          <TodoItem key={todo.id}  todo={todo} deleteItem={ (value)  => deleteItem(value) } taskDone={ (value) =>  taskDone(value) }/>
          )
        }
      </ul>
    </>
  )
}
