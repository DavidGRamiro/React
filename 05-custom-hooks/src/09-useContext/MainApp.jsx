import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
        {/* Usualmente, podemos poner etiquetas a, para rdirigir a nuevas paginas, pero esto hace un full refresh de la aplicacion. */}
        {/* Para ello, React nos proporciona los Links, que son mas eficientes. */}
        {/* <a href='/login'>Login</a> */}
        <Navbar/>
      <hr />

      <Routes>
        
        {/* Establecemos las rutas que queremos renderizar nuestros componentes */}
        <Route  path='/' element={<HomePage />} />
        <Route  path='login' element={ <LoginPage /> } />
        <Route  path='about' element={ <AboutPage /> } />

        {/* En el caso de que no exista una ruta, redirigimos */}
        <Route path='/*' element={ <Navigate  to='/about' /> }  />

      </Routes>
      


    </UserProvider>

  )
}
