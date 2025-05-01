import { loginWithEmailAndPassword, logoutFirebaseUser, registerUserWhitEmailPassword, signInWhitGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
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
    // Si el regitro, no sale bien, llamaos al Logout con el mensaje de error.
    if( !resp.ok) return dispatch(logout( { errorMessage : resp.errorMessage} ))

    // Si todo sale bien, llamamos al login. Mandamos todas las propiedades de la respuesta
    return dispatch(login( { ...resp }))
  }
}

export const startLoginWhitEmailAndPassword = ({ email, password }) => {
  return async(dispatch) => {
    // Actualizamos el state para definir que estamos chekeando las credenciales.
    dispatch(checkingCredentials())
    // Inciamos sesion con el usuario por password y email
    const resp = await loginWithEmailAndPassword(email, password)
    // En el caso de haber un error, llamamos al logout
    if (!resp.ok) return dispatch(logout({ errorMessage: resp.errorMessage }))
    // Si es correcto, actualizamos el state
    return dispatch(login({ ...resp }))
  }
}

export const startLogoutFirebase = () => {
  return async(dispatch) => {
    await logoutFirebaseUser()
    dispatch(clearNotesLogout())
    dispatch(logout())
  }
}