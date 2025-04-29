import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FireBaseAuth } from "./config";



export const googleProvider = new GoogleAuthProvider();
export const signInWhitGoogle = async() => {
  try{
    const result = await signInWithPopup( FireBaseAuth, googleProvider )
    // Aqui ya podemos acceder a los tokens y credenciales del suuario que haya iniciado sesion con google.
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    // Obtenemos los datos del usuario que ha iniciado sesion
    const { displayName, email, photoURL, uid }  = result.user

    return {
      ok: true,
      // Informacion de usuario
      displayName,
      photoURL,
      email, 
      uid
    }

  }catch (error) {

    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}