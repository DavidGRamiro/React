import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  
  // EN nuestro hook, podemos desdestructurar el useForm. Para ello deberemos de propagar el formState en el useForm.
  const { formState ,onResetForm, onInputChange , username, email, password} = useForm({
      username: '',
      email: '',
      password: ''
    })

  
  return (
    <>
      <h1>Formulario con custom hook simple</h1>
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

      <input 
        type='password'
        className='form-control mt-2'
        placeholder='Password'
        name='password'
        value={ password}
        onChange={ onInputChange}
      />

      <button onClick={onResetForm} className='btn btn-primary mt-2'>Reset</button>

    </>

  )
}
