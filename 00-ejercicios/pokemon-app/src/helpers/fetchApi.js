import { useState } from "react"

export const fetchApi = async(pokemon) => {
  

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  const response = await fetch(url)
  const data = await response.json()

  return {
    id: data.id,
    name: data.name,
    imagen: data.sprites.front_default
  }
}
