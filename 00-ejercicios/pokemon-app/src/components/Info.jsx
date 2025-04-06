import { useFetchInfo } from "../hooks/useFetchInfo"

export const Info = ({ pokemon }) => {


  return (
    <> 
    <h1>{ pokemon ? `Identificador: ${pokemon.id}` : 'Sin identificar'  }</h1>
    <img src={pokemon.imagen} alt="" />
    </>
  )
}
