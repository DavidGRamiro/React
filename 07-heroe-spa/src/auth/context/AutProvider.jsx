import { useReducer } from "react"
import { AuthContext } from "./AutContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = { logged : false }

// Para la inicialización de nuestro reducer y no perder el usuario al recargar la pagina.
const init = () => { 
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user,
    user
  }
}

export const AutProvider = ({ children }) => {

  const [ authState, dispatch] = useReducer(authReducer, initialState, init)


  const login = (name = '') => {
    const user = { id: 'ABC', name }
    const action = {
      type : types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = { type: types.logout }
    dispatch(action)
  }


  return (

    <AuthContext.Provider value = {{ ...authState, login : login, logout: logout }}>
      { children }
    </AuthContext.Provider>


  )
}
