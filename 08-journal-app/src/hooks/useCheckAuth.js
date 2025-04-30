import { onAuthStateChanged } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { FireBaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"
import { useEffect } from "react"
import { startLoadingNotes } from "../store/journal/thunks"

export const useCheckAuth = () => {

  const { status } = useSelector( state => state.auth )
  const dispatch = useDispatch()

  // Necesitamos saber el estado de la autenticacion.
  useEffect(() => {
    onAuthStateChanged(FireBaseAuth, async( user )=> {
      // SI no hay ningun usuario, llamamos a logout
      if(!user) return dispatch(logout())

      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
      // Hacemos un dispatch para empezar a cargar las notas que tenga el usuario activo
      dispatch(startLoadingNotes())

    })
  }, [])
  

  return {
    status
  } 
}
