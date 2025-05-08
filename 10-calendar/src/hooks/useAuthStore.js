import { useDispatch, useSelector } from 'react-redux'
import calendarAPI from '../api/calendarApi'
import { clearErrorMessage, onChecking, onLoggin, onLogout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  const startLogin = async({ email, password }) => {
  
    try {
      dispatch(onChecking())
      const { data } = await calendarAPI.post('/auth', { email, password })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLoggin( { name: data.name, uid: data.uid }  ))

    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10);
    }
  }
  
  return {
    // Propiedades
    status,
    user,
    errorMessage,

    // Metodos
    startLogin
  }
}