/* eslint-disable no-unused-vars */
import { useState } from "react"

export const CounterApp = () => {

  const [ counter , setCounter] = useState({
    counter1 : 10,
    counter2 : 20,
    counter3: 30
  })

  const { counter1, counter2, counter3 } = counter

  return (

    <>
      <h1>Counter 1: { counter1 } </h1>
      <h1>Counter 2 : { counter2 } </h1>
      <h1>Counter 3: { counter3 } </h1>

      <hr />

      {/* Hacemos una copia del counter, por que es un objeto y queremos
        manetener  el estado de las otras propiedades, y actualizar solo
        la que nos interesa.
      */}
      <button className="btn btn-info" onClick={ 
        () => setCounter({ ...counter , counter1 : counter1 + 1 }) 
      } > +1
      </button>
    </>

  )
}
