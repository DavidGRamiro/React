import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export const LoginPage = () => {

  // tenemos que hacerle saber a React, que context queremos que utlice del que queremos obtener la informacion
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <pre>

        { JSON.stringify(user, null, 3)}
      </pre>

      <button 
          onClick={ () => setUser({ id: 123, name: 'Juan', email:' juan@email.com' }) }
          className='btn btn-primary'>
        Set user
      </button>

    </>

  )
}
