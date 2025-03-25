
import PropTypes from "prop-types"
import { useState } from "react"


export const CounterApp = ({value}) => {
  
  // Primer Hook Use State
  const [ contador, setContador] = useState(value)

  const onButtonClick = (event) => {
    // Función para setear el valor del state del contador.
    setContador(contador + 1)
  }

  const decreaseCounter = (event) => {
    setContador(contador - 1)
  }

  const resetCounter = (event) => {
    setContador(value)
  }
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { contador } </h2>

      <button onClick={ (event) => onButtonClick(event)  } >
        +1
      </button>
      <button onClick={ (event) => decreaseCounter(event)  } >
        - 1 
      </button>
      <button onClick={ (event) => resetCounter(event)  } >
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
