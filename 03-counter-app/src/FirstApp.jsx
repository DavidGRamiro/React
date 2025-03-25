
import PropTypes from 'prop-types'


const nombre = 'David'
const getMessage = () => {
  return 'Hola David como estás'
}


export const FirstApp = ( { title, subtitle }) => {

  // Digamos que el titulo y el subtitle son propiedades del componente obligatorias.
  // Para eso, utilizamos los PropTypes, que si hemos instalado el proyecto con vite, no esta instalado por defecto.
  //  yarn add prop-types     


  return (
    // Esto se utiliza cvuando vamos a regresar mas de un componente html. Normalmente
    // se ha estado utilizando Div, pero crea un elemento que no es necesario y nos puede romper los estilos.
    // Para eso, se creo el Fragment, que engloba todo el componente, pero esta 'deprecado'. 
    // Para eso, se utiliza <> que es el simil al Fragment
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p> 
    </>
  )
}

// En React19, se omite ya por defecto las PropTypes. Se puede solucionar esto bajando a la version 18.
// Modificandolo en el package.json, borrando el nodo modules,  y ejecutando el comando yarn install
FirstApp.propType = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

// Tampoco funcionan las defaultProps
FirstApp.defaultProps = {
  title: 'No hay titulo'
}