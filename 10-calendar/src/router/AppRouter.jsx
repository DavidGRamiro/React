import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { CalendarPage } from '../calendar/pages/CalendarPage'
import { useAuthStore } from '../hooks/useAuthStore'
import { useEffect } from 'react'


export const AppRouter = () => {
  
  // const authStatus = 'not-autenticathed'
  const { status, checkAuthToken } = useAuthStore()
  // Por cada cambio estamos renovando el token 
  useEffect(() => {
    checkAuthToken()
  }, [])
  

  if(status === 'checking'){
    return (<h1>Cargando</h1>)
  }

  return (
    <Routes>
      {
        (status === 'not-autenticathed') 
        ? (
          <>
            <Route path='/auth/*' element={ <LoginPage /> }  />
            <Route path='/*' element={ <Navigate to={'/auth/login'}  />  } />
          </>
        )
        : (
          <>
            <Route path='/' element={ <CalendarPage /> }  />
            <Route path='/*' element={ <Navigate to={'/'}  />  } />
          </>
        )
      }

    </Routes>
  )
}
