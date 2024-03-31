



export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = "David"
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );