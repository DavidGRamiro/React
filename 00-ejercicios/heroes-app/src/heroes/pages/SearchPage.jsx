import { useLocation, useNavigate } from "react-router-dom"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName"
import { useForm } from "../hooks/useForm"
import queryString from 'query-string'


export const SearchPage = () => {
  
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' }  = queryString.parse(location.search)
  const heroe = getHeroesByName(q)

  const { formSearch, onInputChange} = useForm({
    formSearch: ''
  })

  // Al hacer submit, add a la url, el parametro de busuqeda que queremos.
  // Una vez hecho, utilizamos la location de BrowserRouter y obtenemos el parametro de busqueda
  // con la libreria de queryString. Una vez obtenido, buscamos el heroe.
  const onSubmitForm = (event) => {
    event.preventDefault()
    navigate(`?q=${formSearch}`)
  }
  
  
  return (
    <>
      <div className="alert alert-info mt-2">Búsqueda de heroe</div>
      <div className="row">

        {/* Formulario de busqueda */}
        <div className="col-6">

          <form onSubmit={onSubmitForm}>
            <input type="text" name='formSearch' placeholder="Búsqueda de heroe.." className="form-control" value={formSearch} onChange={onInputChange} />
            <button className="btn btn-primary mt-2" type="submit">Buscar</button>

          </form>

        </div>
        
        {/* RESULTADOS DE BSUQUEDA */}
        <div className="col-6">
          <div className="alert alert-info">Resultados encontados.</div>
        {
          heroe?.map( heroe => (
            <HeroCard key={heroe.id}  {...heroe}/>
          ))

        }
        </div>
      </div>
    </>

  )
}
