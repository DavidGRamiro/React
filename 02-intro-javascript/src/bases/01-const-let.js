

// Variables y constantes
const nombre = 'David';
const apellido = 'Gonzalez';

let valorDado = 5;

console.log(nombre, apellido, valorDado);

// Variables de scope
if (true) {
    const nombre = 'pepe';
    console.log(nombre);
}
// Devuelve el nombre David
console.log(nombre);