import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)


  return (

    <>
      <h1>Login Page</h1>

      <pre>

        Usuario Activo
        <hr />
        { JSON.stringify( user, null, 3) }
      </pre>

      <button  className="btn btn-outline-primary" onClick={ () => {
        setUser( { nombre: 'Juan', apellidos: 'Garrido' } )
      } }>Cambio de usuario</button>
    </>
  )
}
