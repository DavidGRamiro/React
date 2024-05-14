/* eslint-disable react/prop-types */

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"



export const HeroeList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher)

  return (
    <>
      <h1>Lista</h1>
      <ul>
        { heroes.map( heroe => (
          <li key={heroe.id}> { heroe.superhero } </li>
          ))  
        }
      </ul>
    
    
    </>
  )
}
