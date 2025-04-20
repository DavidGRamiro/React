import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path='login' element={ 
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
          } >
        </Route>

        {/* Router personalizado. Este se encargara de redirigir a las rutas hijas unavez autenticado, y de mostrar el Navbar.
        Anteriormente, teniamos todo declarado aqui, pero no nos interesa que en el login se pueda ver el navbar. */}
        <Route path='/*' element={  
          // Para declarar una ruta privada, lo que hacemos es crear otro componente, en el que por el contexto, si esta autenticado,
          // mostramos las rutas del HeroeRoutes, si no, navegamos al login.
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>}>
        </Route>

      </Routes>  
    </>
  )

}
