
import { Routes, Route } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { Login } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  
  return (
    <>
      <Routes>
        <Route path='login' element={ <PublicRoute>
                                        <Login></Login>
                                      </PublicRoute> }>

        </Route>
        {/* <Route path='login' element={ <Login /> } ></Route> */}
        <Route path='/*' element={ <PrivateRoute>
                                      <HeroesRoutes></HeroesRoutes>
                                  </PrivateRoute> }>
        </Route>

        {/* <Route path='/*' element={ <HeroesRoutes /> } ></Route> */}
      </Routes>    
    </>
  )
}
