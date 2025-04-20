import { heroes } from "../data/heroes"

export const getHeroeById = (identificador) => {
  return heroes.find( item => item.id == identificador)
}