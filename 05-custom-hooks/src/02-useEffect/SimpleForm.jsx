import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: 'David',
    email: 'david@google.com'
  })
  
  const { username , email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target

    // utilizamos las propiedades computadas de los objetos. Es decir, aqui lo que hacemos, es mantener
    // las propiedades de los objetos, para mantener todos los valores del formularia,
    // Y la propiedad name, es la que vamos a cambiar, que es igual a la que nos llega por el target, y le ponemos el value que tenemos.
    setFormState({
      ...formState,
      [ name ]: value
    })
  }


  // FORMA DE UTILIZAR EL USE EFFECT
  // Este hooks, si no se pone una dependencia, va a detectar cualquier cambio que ocurra en el componente,
  // esto hace que se redibuje
  // SI en las dependencias le ponemos un array vacio, solo se va a disparar una unica vez, al ser montado
  // Se recomienda, que da efecto realice su propia function. Es decir, si queremos disparar un efecto para el formulario, otro para el emal, y otro para el username,
  // Aun que sean 3 funciones, es recomendable.
  useEffect(() => {
    // console.log(' SE LLAMA AL USE EFFECT al inicio, una sola vez')
  }, [])

  useEffect(() => {
    // console.log(' Se llama al useeffect cuando se cambia el formulario')
  }, [formState])

  useEffect(() => {
    // console.log(' Se llama al use effect cuando el email ha cambiado.')
  }, [email])
  

  





  
  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input 
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={ username }
        onChange={ onInputChange}
      />

      <input 
        type='email'
        className='form-control mt-2'
        placeholder='Email'
        name='email'
        value={ email}
        onChange={ onInputChange}
      />

      { 
        ( username === 'david') && <Message />
      }

    </>

  )
}
