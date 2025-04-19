import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ({
  superhero, alter_ego, characters, first_appearance, id}) => {

  const heroImage = `/src/assets/heroes/${id}.jpg`

  return (
    <div className="col">
    <div className="card">
      <div className="row no-gutters">
        <div className="col-4">
          <img src={heroImage}  className="card-image" alt={superhero} />
        </div>

        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title"> { superhero } </h5>
            <p className="card-text"> {alter_ego} </p>
            
            {/* Solo si los alterEgos son diferentes al de los characters, mostramos el parrafo. */}
            {
              (alter_ego != characters) && <p>{ characters }</p>
            }

            <p className="card-text">
              <small className="text-muted"> { first_appearance}</small>
            </p>
            
            {/* Búsqueda de una ruta a partir de un un id del heroe */}
            <Link to={`/hero/${id}`}>
              Más información..
            </Link>

          </div>
        </div>

      </div>
    </div>
  </div>
  )
}
