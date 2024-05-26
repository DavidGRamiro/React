import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName"
// import queryString from 'query-string'


export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { q } = queryString.parse( location.search)
  const heroes =  getHeroesByName(q)

  const { searchText, onInputChange } = useForm({
    searchText : q
  })

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${ searchText }`)
  }



  return (
    <>
      <div className="row">
      <div className="col-5">
        <h1>Searching</h1>
        <hr />
        <form onSubmit={onSubmit}>
          <input type="text"  value={ searchText}  onChange={onInputChange} placeholder="Burcar Heroe" className="form-control" name="searchText" autoComplete="off" />
          <button className="btn btn-primary mt-1"> Buscar </button>
        </form>
      </div>

      <div className="col-7">
        <h4>Resultados</h4>
        <hr />

        { (q === '') 
          ? <div className="alert alert-primary"> Busca un heroe</div>
          : (heroes.length == 0  ) &&
            <div className="alert alert-danger">Sin resultados para { q } </div>
        }



        { heroes.map( heroe => (
          <HeroCard key={heroe.id} {...heroe} />
        )) }



      </div>
      
      </div>
    </>
  )
}
