/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username : 'David',
    email: 'david@email.com'
  })

  const { username, email  } = formState
  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [ name ]:value
    })
  }

  // Se llama solo una vez, cuando se renderiza el componente por primera vez, con un arreglo vacío.
  useEffect( () => {
    // console.log('Se ha llamado')
  }, [])

  // Si queremos renderizar solo cuando el formulario cambie, lo pasamos como segundo parametro.
  useEffect( () => {
    // console.log('Se ha llamado el formulario')
  }, [formState])

  // Cada vez que se cambie algo del email se dispara. Por consecuente tambien se dispara el useEffect del formulario.
  useEffect( () => {
    // console.log('Se ha llamado el email')
  }, [email])



  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
      />

      <input type="email"
              className="form-control mt-2"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
      />
    
    {
      // Si el usuario es '*' mostramos el componente
      username === 'Valentino' && <Message></Message>  
    }

    </>
  )
}
