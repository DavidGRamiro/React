import { Routes, Route, NavLink } from 'react-router-dom'
import { MarvelPage } from './heroes/pages/MarvelPage'
import { DcPage } from './heroes/pages/DcPage'
import { SearchPage } from './heroes/pages/SearchPage'
import { LoginPage } from './auth/pages/LoginPage'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (

    <>
      {/* Router principal de la aplicación */}
      <AppRouter />
    </>

  )
}
