import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";

// Inicializamos el nuevo proveedor
export const googleProvider = new GoogleAuthProvider();
// Funciones asincronas proporcionadas por Google.
export const signInWhitGoogle = async() => {
  try{
    // Funcion asincrona proporcionada por Firebase.
    const result = await signInWithPopup( FireBaseAuth, googleProvider )
    // Aqui ya podemos acceder a los tokens y credenciales del suuario que haya iniciado sesion con google.
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    // Obtenemos los datos del usuario que ha iniciado sesion
    const { displayName, email, photoURL, uid }  = result.user
    // EN caso de que todo haya ido bien, devolvemos el resultado OK
    return {
      ok: true,
      // Informacion de usuario
      displayName,
      photoURL,
      email, 
      uid
    }
  }catch (error) {
    // EN el caso de error, devolvemos un mensaje.
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

// Registro de un usuario con la funcion proporcionada por Google.
export const registerUserWhitEmailPassword = async({ email, password, displayName }) => {
  try{
    const resp = await createUserWithEmailAndPassword(FireBaseAuth, email, password)
    const { uid, photoURL } = resp.user
    return {
      ok: true, email, uid, photoURL, displayName
    }
  }catch (error){
    return { ok: false, errorMessage: error.message }
  }
}