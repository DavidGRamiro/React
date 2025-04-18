import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'
import { LoginPage } from '../../auth'

export const HeroesRoutes = () => {
  return (

    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='marvel' element={ <MarvelPage/> } ></Route>
          <Route path='dc' element={ <DcPage /> } ></Route>

          <Route path='search' element={ <SearchPage /> }></Route>
          <Route path='hero/:id' element={ <HeroPage /> }></Route>

          <Route path='/' element={ <Navigate to={'/marvel'}></Navigate>}></Route>
        </Routes>  
      </div>



    </>

  )
}
