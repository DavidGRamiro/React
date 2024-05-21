import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AutContext"
import { useContext } from "react"


export const Login = ( ) => {
  
  const { login } = useContext(AuthContext)
  const navigate = useNavigate() 
  
  const onLogin = () => {

    // Recordamos la ultima ruta guardada en el localStorage
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('David González')
    navigate(lastPath, { replace: true })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
            className="btn btn-primary"
            onClick={() => onLogin() }
      >Login</button>    
    </div>
  )
}
