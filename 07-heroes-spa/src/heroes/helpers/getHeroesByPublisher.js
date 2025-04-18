

import {heroes} from  '../data/heroes'


// Función para obtener solo el publisher deseado de los heroes de nuestra data.
export const getHeroesByPublisher = ( publisher ) => {

  const validPubliushers = ['DC Comics', 'Marvel Comics']
  if(!validPubliushers.includes(publisher)){
    throw new Error(`${ publisher } is not Valid`);
  }

  return heroes.filter( items => items.publisher === publisher)

}