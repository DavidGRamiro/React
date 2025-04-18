import React from 'react'
import { HeoCard } from '../components/HeoCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByNames } from '../helpers/getHeroesByName'

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  // Utilizamos la biblioteca de terceros para obtener los query parameters
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByNames(q)
  
  const { searchText, onInputChange, onResetForm} = useForm({
    searchText: q
  })



  const onSubmitSeach = (event) => {
    event.preventDefault()
    navigate(`?q=${searchText}`)

  }


  return (
    <>
      <h1 className='mt-2'>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscando..</h4>
          <hr />
          <form onSubmit={onSubmitSeach}>
            <input className="form-control" placeholder='Search a hero'  type="text" name="searchText" autoComplete='off' value={searchText} onChange={onInputChange} />
          </form>
          <button className='btn btn-outline-primary mt-2' type='submit'>Buscar</button>
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          { (q == '') ?
            <div className='alert alert-primary'>
              Search a hero
            </div>
            : ( heroes.length === 0) && 
            <div className='alert alert-danger'>
              No hero for {q}
            </div>
          }



          {
            heroes.map( heroe => 
              <HeoCard  key={heroe.id} { ...heroe }/>
            )
          }

        </div>
      </div>





    </>

  )
}
