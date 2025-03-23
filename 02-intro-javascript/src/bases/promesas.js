

// Promesas
const promesa = new Promise( (resolve, reject) => {

  setTimeout(() => {
    // Aqui se haria una peticion HTTP. Si la llamada ha sido correcta la respuesta llamamos a resolve
    const heroe = getHeroById(2)
    if (heroe){
      resolve(heroe)
    }else{
      reject(' No se pudo encontrar el heroe')
    }
  }, 2000);
} )


promesa.then( ( heroe) => {
  console.log(' Then de la promesa', heroe)
}).catch( err => console.log(' No se ha podido encontrar el heroe'))



getHeroeByIdAsync = (id) => {
  return new Promise ((resolve, reject) => {

    setTimeout(() => {

      const heroe = getHeroe(id)
      if(heroe){
        resolve(heroe)
      }else{
        reject('Ha habido problemas')
      }
    }, 2000);
  })
}


// Promesa asociada a una funcion. El cathch imprimiera lo que tenegamos en el reject.
// El then imprimira lo que hayamos puesto en el resolve.
getHeroeByIdAsync(2).then( 
    heroe => console.log('Heroe encontrado')
  ).catch( err => console.log(err))