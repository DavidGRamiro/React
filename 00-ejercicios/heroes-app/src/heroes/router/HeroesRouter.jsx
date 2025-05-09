import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { SearchPage } from '../pages/SearchPage'
import { Navbar } from '../../ui/components/Navbar'
import { HeroePage } from '../pages/HeroePage'

export const HeroesRouter = () => {
  return (

      <>
        <Navbar />

        <div className='container'>
          <Routes>
            <Route path='marvel' element={ <MarvelPage />}></Route>
            <Route path='dc' element={<DcPage />}></Route>
            <Route path='search' element={ <SearchPage /> }></Route>
            {/* Busuqeda por id de un heroe */}
            <Route path='hero/:id' element={ <HeroePage /> }></Route>


            {/* Ruta Home, redirigimos a la pagina principal de marvel */}
            <Route path='/' element={ <Navigate to={'/marvel'}></Navigate> }></Route>
          </Routes>
        </div>
      </>

  )
}
