import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroeById"
import { useMemo } from "react"

export const HeroePage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  // Memorizamos los datos, y las dependencias es el id. Cuando el ID cambia, lo llamamos, si es el mismo no.
  const heroe = useMemo( () => getHeroById(id), [id] ) 

  if(!heroe){
    return <Navigate to={'/marvel'}/>
  }

  const onReturn = () => {
    navigate(-1)
  }

  return (
    
    <div className="row mt-5">
      <div className="col-4">
        <img src={ `/assets/${ id }.jpg` }  alt={ heroe.superhero } className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8">
        <h3>{ heroe.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego</b> : {heroe.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher</b> : {heroe.publisher}
          </li>
          <li className="list-group-item">
            <b>Primera aparición</b> : {heroe.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3"> Characters :  </h5>
        <p>{ heroe.characters }  </p>
        <button className="btn btn-outline-primary" onClick={ () => onReturn()}>Volver</button>
      </div>
    </div>
  )
}
