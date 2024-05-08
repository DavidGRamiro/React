import { useReducer } from "react"
import { todoReducer } from "./TodoReducer"

const initialState = [
  {
    id: new Date().getTime(),
    descripcion : 'Hacer la cena',
    done : false
  },
  {
    id: new Date().getTime() * 3,
    descripcion : 'Fregar',
    done : false
  },
]

export const TodoApp = () => {

  const [ todo , dispatch] = useReducer( todoReducer , initialState )


  return (

    <>
      <h1>Todo App (10), <small>Pendientes: 3</small></h1>
      <hr />


      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between">
              <span className="align-self-center">Item 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input type="text"
            placeholder="Que hay que hacer ?"
            className="form-control" />

            <button className="btn btn-primary mt-2" 
                    type="submit"
            > Agregar </button>


          </form>
        </div>



      </div>



    
    </>


  )
}
