/* eslint-disable no-unused-vars */

import { useState } from "react"



export const useForm = ( initialForm = {} ) => {
  

  const  [formState, setFormState ] = useState(initialForm)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [ name ]:value
    })
  }

  const onResetForm = (event) => {
    if (formState.username === '' && formState.email === '' && formState.password === '') {
      alert('No hay nada que borrar')
    }else{
      setFormState(initialForm)  
    }

  }

  // Desestructuramos el componente del formulario para tener acceso a todas sus variables
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
