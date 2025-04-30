import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { ChekingAuth } from '../ui/components/ChekingAuth'
import { useCheckAuth } from '../hooks/useCheckAuth'


export const AppRouter = () => {

  // Custom Hook para verificar si tenemos usuario autenticado
  const { status } = useCheckAuth()


  // Para mostar el un loader a nivel de toda la aplicacion
  if(status === 'checking'){
    return <ChekingAuth />
  }


  return (
    <Routes>
      {/* Solo en el caso de que el usuario este autenticado, mostramos las rutas de Jorunal,
      si no, solo servan visibles las rutas del login y register. */}

      { (status === 'authenticated') 
        ? <Route path='/*' element={ <JournalRoutes />}></Route> 
        : <Route path='/auth/*' element={ <AuthRoutes /> } ></Route>
      }
      <Route path='/*' element={ <Navigate to={'/auth/login'}></Navigate>  }></Route>

      {/* Login y registro */}
      {/* <Route path='/auth/*' element={ <AuthRoutes /> } ></Route> */}

      {/* Journal App */}
      {/* // <Route path='/*' element={ <JournalRoutes />} ></Route> */}
    </Routes>
  )
}
