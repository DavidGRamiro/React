/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

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

  
  useEffect( () => {
    console.log('Se ha llamado')
  })


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
    
    </>
  )
}
