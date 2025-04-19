import React from 'react'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRouter } from '../heroes/router/HeroesRouter'
import { Route , Routes } from 'react-router-dom'

export const AppRouter = () => {
  
  return (
    <>
      <Routes>
        <Route path='login' element={ <LoginPage/>}></Route>
        {/* Router personalizado */}
        <Route path='/*' element={ <HeroesRouter /> }></Route>
      </Routes>
    </>

  )
}
