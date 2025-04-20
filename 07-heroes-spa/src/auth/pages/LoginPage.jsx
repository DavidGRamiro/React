import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const onLoggin = () => {

    // Verificamos si existe un last path, para hacer el login, que vuelva a la misma pantalla antes de hacer logout
    const lasthPath = localStorage.getItem('lastPath')
  

    // Llamamos al login que tiene nuestranfuncion, recibida desde el authProvider.
    login('David')

    navigate(`${ lasthPath ? lasthPath : '/' }  `, {
      replace: true
    })
  }
  
  return (
    <div className="container mt-5">

      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary' onClick={onLoggin} > Login</button>

    </div>
  
  )

}
