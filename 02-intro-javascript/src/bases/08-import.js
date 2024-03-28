import { heroes } from "../data/heroes";


// Búsqueda de un solo item
export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
// console.log(getHeroeById(2));

// Busqueda de todos aquellos que satisfacen la búsqueda.
export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
// console.log(getHeroeByOwner('DC'))


