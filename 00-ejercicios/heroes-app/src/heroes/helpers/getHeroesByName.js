import { heroes } from '../data/heroes'
 

export const getHeroesByName = ( name = '' ) => {

  const heroName  = name.toLocaleLowerCase().trim('')

  if(heroName.length <= 2) return

  return heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().includes(heroName))

}

