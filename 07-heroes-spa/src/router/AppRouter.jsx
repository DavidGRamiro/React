import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>

      <Routes>
        <Route path='login' element={ <LoginPage /> } ></Route>

        {/* Router personalizado. Este se encargara de redirigir a las rutas hijas unavez autenticado, y de mostrar el Navbar.
        Anteriormente, teniamos todo declarado aqui, pero no nos interesa que en el login se pueda ver el navbar. */}
        <Route path='/*' element = { <HeroesRoutes /> }></Route>
      </Routes>  
    </>
  )

}
