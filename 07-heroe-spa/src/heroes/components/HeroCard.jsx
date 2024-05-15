
import { Link } from 'react-router-dom'

const CaractherByHeroe = ({ alter_ego, characters }) => {

  if( alter_ego === characters) return (<></>);
  return (<p> { characters } </p>)
}




export const HeroCard = ({ 
  id, 
  superhero,
  publisher, 
  alter_ego, 
  first_appearance,
  characters
}) => {

  const imageURL = `/assets/${ id }.jpg`
  
  return (

    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">
          {/* IMAGEN */}
          <div className="col-4">
            <img src={imageURL} className='card-img' alt={superhero} />
          </div>
          {/* DESCRIPCION */}
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text"> {alter_ego} </p>

              <CaractherByHeroe alter_ego={alter_ego} characters={characters} />

              <p className="card-text">
                <small className="text-muted"> { first_appearance } </small>
              </p>

              <Link to={`/heroe/${ id }`}> Más información.. </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
