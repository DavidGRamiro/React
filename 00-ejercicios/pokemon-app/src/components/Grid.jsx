import { useState } from "react"
import { Info } from "./Info"
import { fetchApi } from "../helpers/fetchApi"
import { useFetchInfo } from "../hooks/useFetchInfo"


export const Grid = ( {pokemon}) => {

  const { info } = useFetchInfo(pokemon)

  return (
    <>
        <h2>{pokemon}</h2>
        <hr />
        <div>
          <Info key={pokemon} pokemon={info}/>
        </div>
      </>
  )
}
