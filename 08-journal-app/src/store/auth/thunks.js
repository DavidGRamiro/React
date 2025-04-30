import { registerUserWhitEmailPassword, signInWhitGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAutentication  = (email, password) => {
  return async(dispatch) => {
    dispatch( checkingCredentials() )
  }
}

// Inicio de sesion en Google.
export const startGoogleSignIn = () => {
  return async(dispatch) => {
    // Llamada al Slice.
    dispatch(checkingCredentials())
    const result = await signInWhitGoogle()
    // Si hay un error, llamamos al logout, por ejemplo, cuando el usuario cierra el modal de SignIn whit google.
    if(!result.ok)
      return dispatch(logout( result.errorMessage ))
    
    // Si todo va bien, llamamos a login, ya que tenemos una respuesta sincrona.
    dispatch(login( result))
  }
}

// Para la pagina de registro, creamos un nuevo usuario con email y password.
export const startCreatingUserWithEmailPassword = ( {email, password, displayName}) => {
  return async(dispatch) => {
    // Funcion sincrona.
    dispatch(checkingCredentials())
    // Llamamos a la funcion proporcionada por google para el registro de un nuevo user
    const resp = await registerUserWhitEmailPassword({ email, password, displayName})
    console.log(resp)
  }
}