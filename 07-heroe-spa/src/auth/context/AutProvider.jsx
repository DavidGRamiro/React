import { useReducer } from "react"
import { AuthContext } from "./AutContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = { logged : false }

export const AutProvider = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, initialState)


  const onLogin = (name = '') => {
    const action = {
      type : types.login,
      payload: { id: 'ABC', name: name }
    }
    dispatch(action)
  }

  return (

    <AuthContext.Provider value = {{ login: onLogin, ...state}}>
      { children }
    </AuthContext.Provider>


  )
}
