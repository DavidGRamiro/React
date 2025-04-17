import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { UserProvider } from '../context/userProvider'
 
export const MainPage = () => {
  return (

    <>
      <UserProvider>
        <Navbar />
        <hr />


        <Routes>
          <Route path="/" element={ <HomePage /> } ></Route>
          <Route path="login" element={ <LoginPage /> } ></Route>
          <Route path="about" element={ <AboutPage /> } ></Route>
          <Route path="/*" element={ <Navigate to={'/login'} />} ></Route>
        </Routes>
      </UserProvider>

    </>
  )
}
