import { useForm } from "../hooks/useForm"

export const TodoForm = ({ emitForm }) => {
  
  const { description, onInputChange, resetForm } = useForm({description: ''})

  const onFormSubmit = (event) => {
    event.preventDefault()
    if(description.lenght < 1) return
    
    let newTodo = {
      id: new Date().getTime() + 1000,
      description: description,
      done: false
    } 
    
    emitForm(newTodo)
    resetForm()
  }

  return (
    
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Agregar tarea..." className="form-control" name="description" value={description} onChange={onInputChange}></input>
        <button className="btn btn-outline-primary mt-2" type="submit">Agregar</button>
      </form>
    
    </>


  )
}
