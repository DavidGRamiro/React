import { useState } from 'react' 
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

    // UseState -> Para cambiar el estado del compoennte, en este caso el valor.
    //  Se establece un valor, al que inicializamos el counter, en este caso 0.
    // Si queremos cambiarlo, tenedremos que declarar otra variable, seguido de set + el nombre de la variable inicial.
    // No es obligatorio, es un estandar.
    const [ counter, setCounter ] = useState(value)
    
    // Añadimos un numero al contador.
    const addCounter = () =>  { 
        setCounter(counter + 1)
        // setCounter((c) => c + 1) Esta es otra forma de hacerlo.
    } 

    // Restamos un valor al contador.
    const deleteCounter = () => {
        setCounter( counter -1 )
    }

    // Reseteamos el contandor al valor por defecto que llega del padre.
    const resetCounter = () => {
        setCounter(value)
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>


            {/* No es necesario llamar a la funcion y pasarle el event, viene implicito */}
            <button onClick={ addCounter }>+1</button>
            <button onClick={ deleteCounter }>- 1</button>
            <button onClick={ resetCounter }>Reset</button>

        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}