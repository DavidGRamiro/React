

// Ejemplos de desestructuracion de objetos
const persona = {
  nombre: 'David',
  apellido: 'Gonzalez',
  edad: 31
}

const { nombre, apellido } = persona

const retornaPersona = ( usuario ) => {
  const { edad, nombre, apellido} = usuario
  console.log(nombre)
}

// Variante de desestructuracion de valores de objetos en fucniones
const retornaPersona2 = ({ edad, colorFavorito = 'Amarillo'}) => {
  console.log(edad)
  console.log(colorFavorito)
}

retornaPersona(persona)
retornaPersona2(persona)


// Variante para desestructurar un objeto a partir de una funcion que retorna otro objeto
const prueba = ({ nombre, edad }) => {
  return {
    miEdad: edad,
    miNombre: nombre,
    extra:{
      pelo: 'Castanio',
      altura : 1.72
    }
  }
}

// Desestructuracion anidada de objetos
const { extra: {pelo, altura} } = prueba(persona)

console.log(altura)