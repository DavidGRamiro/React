import { onAuthStateChanged } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { FireBaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"
import { useEffect } from "react"

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

    })
  }, [])
  

  return {
    status
  } 
}
