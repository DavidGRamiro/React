import { registerUserWhitEmailPassword, signInWhitGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAutentication  = (email, password) => {
  return async(dispatch) => {
    dispatch( checkingCredentials() )
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWhitGoogle()

    // Si hay un error, llamamos al logout, por ejemplo, cuando el usuario cierra el modal de SignIn whit google.
    if(!result.ok)
      return dispatch(logout( result.errorMessage ))
    
    // Si todo va bien, llamamos a login
    dispatch(login( result))
  }
}

export const startCreatingUserWithEmailPassword = ( {email, password, displayName}) => {

  return async(dispatch) => {
    dispatch(checkingCredentials())

    const resp = await registerUserWhitEmailPassword({ email, password, displayName})
    console.log(resp)
  }
}