
import { heroes } from "../data/heroes"

export const getHeroById = (id) => {

  return heroes.find( item => item.id == id)


}