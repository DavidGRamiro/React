

// Desestructuracion de arrays


const personajes = ['Goku', 'Vegetta', 'Trums' ]
const [ p1, p2 ,p3] = personajes
const [ , , tercerElemento] = personajes

console.log(tercerElemento)

const retornaArreglo = ( ) => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)


const prueba= ( valor) => { 
  return [ 
    valor, 
    () => { console.log('HolaMundo')} 
  ]
}

const [ nombre, setear] = prueba('GOKU')
console.log(nombre)
// Aqui estamos llamando a la funcion que tiene en la segunda posicion nuestro array
setear()

