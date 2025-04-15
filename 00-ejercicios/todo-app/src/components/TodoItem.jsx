
export const TodoItem = ({ todo, deleteItem, taskDone}) => {
  
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className={` align-self-center  ${ todo.done && 'text-decoration-line-through' }`}  onClick={() => taskDone(todo.id) }>{todo?.description}</span>
        <button className="btn btn-danger" onClick={ () =>  deleteItem(todo.id)  } >Eliminar</button>
      </li>
    </>
  )
}
