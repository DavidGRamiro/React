
import { Routes, Route } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { Login } from '../auth'

export const AppRouter = () => {
  
  return (
    <>
      <Routes>
        <Route path='login' element={ <Login /> } ></Route>
        <Route path='/*' element={ <HeroesRoutes /> } ></Route>
      </Routes>    
    </>
  )
}
