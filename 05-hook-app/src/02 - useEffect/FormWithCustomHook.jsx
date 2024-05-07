/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const { formState, onInputChange, 
          username, password, email,
          onResetForm
        }  = useForm({
    username : '',
    email: '',
    password: ''
  })

  // Puede ser desestructurado, con el custom Hook, si desestructuramos en el Hook.
  // const { username, email, password  } = formState

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
      <h1>Formulario con Custom Hook</h1>
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

      
      <input type="password"
              className="form-control mt-2"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
      />


      <button className="btn btn-primary mt-2"
              onClick={onResetForm}>
          Borrar formulario
      </button>
    
    {
      // Si el usuario es '*' mostramos el componente
      username === 'Valentino' && <Message></Message>  
    }

    </>
  )
}
