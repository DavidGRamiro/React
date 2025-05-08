import { useDispatch, useSelector } from 'react-redux'
import calendarAPI from '../api/calendarApi'
import { clearErrorMessage, onChecking, onLoggin, onLogout } from '../store/auth/authSlice'

export const useAuthStore = () => {
  
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  // Inicio de sesion
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

  // Registro de un nuevo usuario
  const startRegister = async({ email, password, name }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarAPI.post('/auth/new', { email, password, name })
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLoggin({ name: data.name, uid: data.name }))
      
    } catch (error) {
      dispatch(onLogout( error.response.data?.msg || 'Error en la autenticación'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10);
    }
  }

  // Para ver si tenemos un token valido
  const checkAuthToken = async() => {
    const token  = localStorage.getItem('token')
    if(!token) return dispatch(onLogout());
    
    try {
      const { data } = await calendarAPI.get('/auth/renew')
      localStorage.setItem('token', data.token)
      localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLoggin({ name: data.name, uid: data.uid }))
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout())
    }
  }


  
  return {
    // Propiedades
    status,
    user,
    errorMessage,
    
    // Metodos
    startLogin,
    startRegister,
    checkAuthToken
  }
}