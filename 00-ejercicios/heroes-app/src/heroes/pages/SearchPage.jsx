import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers/getHeroesByName"
import { useForm } from "../hooks/useForm"

export const SearchPage = () => {
  
  const { formSearch, formState, onInputChange} = useForm({
    formSearch: ''
  })

  const heroe = getHeroesByName(formSearch)
  
  const onSubmitForm = (event) => {
    event.preventDefault()
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


        { (heroe?.length == 0 && formSearch.length > 0) &&
          <div className="alert alert-danger">No se han encontrado resultados para la búsqueda.</div>
          }
        </div>
      </div>

    </>

  )
}
