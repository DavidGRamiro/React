import { useContext } from "react"
import { AuthContext } from "../auth/context/AutContext"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ({  children  }) => {
  
  const { logged } = useContext(AuthContext)
  
  // Memorizamos el ultimo path que ha hecho el usuario
  const { pathname, search } =  useLocation()
  const lastPath  = pathname + search
  localStorage.setItem('lastPath', lastPath)


  return (logged) ? children : <Navigate to={'/login'}></Navigate>
}


