import { useContext } from "react"
import { UserContext } from "./context/UserContexts"

export const LoginPage = () => {


  const { user, setUser } = useContext( UserContext)


  const establecerUsuario = (e) => {
    setUser({
      id: 1234,
      name: 'David Gonzalez',
      emai: 'dgonzalez.ramiro@gmail.com'
    })
  }

  return (

    <>
      <h1>Login Page</h1>
      <hr />

      <pre>
        {   JSON.stringify(user,null,3)}
      </pre>


      <button className="btn btn-primary" onClick={ () => establecerUsuario() }> Establecer usuario</button>
    
    </>

  )
}
