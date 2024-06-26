import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'


const AppRouter = () => {
  return (

    <Routes>
      
      {/* LOGIN Y REGISTRO */}
      <Route path='/auth/*' element={ <AuthRoutes /> } />
      
      {/* JOURNAL APP */}
      <Route path='/*' element={ <JournalRoutes/> } />
    </Routes>


  )
}

export default AppRouter
