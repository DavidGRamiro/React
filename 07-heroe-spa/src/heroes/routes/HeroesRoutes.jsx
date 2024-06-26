import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroePage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (

    <>
      <Navbar/>

      <div className='container'>
      <Routes>
        <Route path='marvel' element={ <MarvelPage /> } ></Route>
        <Route path='dc' element={ <DcPage /> } ></Route>
        
        <Route path='heroe' element={ <HeroePage /> } ></Route>
        <Route path='heroe/:id' element={ <HeroePage /> } ></Route>

        <Route path='search' element={ <SearchPage /> } ></Route>

        {/* COMPONENTES FUTUROS */}
        <Route path='/' element={ <Navigate  to={'marvel'}/> } ></Route>
      </Routes>    
      </div>
    </>

  )
}
