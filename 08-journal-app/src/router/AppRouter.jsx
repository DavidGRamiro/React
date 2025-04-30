import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useSelector } from 'react-redux'
import { ChekingAuth } from '../ui/components/ChekingAuth'


export const AppRouter = () => {

  const { status } = useSelector( state => state.auth )
  // Para mostar el un loader a nivel de toda la aplicacion
  if(status === 'checking'){
    return <ChekingAuth />
  }


  return (
    <Routes>
      {/* Login y registro */}
      <Route path='/auth/*' element={ <AuthRoutes /> } ></Route>

      {/* Journal App */}
      <Route path='/*' element={ <JournalRoutes />} ></Route>
    </Routes>
  )
}
