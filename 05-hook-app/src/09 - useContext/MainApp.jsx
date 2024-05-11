import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'


export const MainApp = () => {
  return (

    <UserProvider>
      <h1>Main App</h1>
      <hr />

      <Navbar></Navbar>
      <hr />

      <Routes>
        <Route path='/' element={ <HomePage></HomePage> } ></Route>
        <Route path='login' element={ <LoginPage></LoginPage> } ></Route>
        <Route path='about' element={ <AboutPage></AboutPage> } ></Route>
        {/* RUTAS QUE NO EXISTEN Y QUEREMOS REDIRIGIR  */}
        <Route path='/*' element={ <Navigate to={'/about'} ></Navigate> }  ></Route>
      </Routes>
    
    </UserProvider>

  )
}
