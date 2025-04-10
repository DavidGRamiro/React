import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10)

  // UseCallBack se utiliza para memorizar funciones.
  // Em este caso, tenemos un boton que sirve para renderizar
  // El cambio de estado del copunter, no hace nada mas, pero al pasarle una funcion,
  // no podemos ponerle el Memo, por que se esta llamando a la function, y siempre va a tener un valor distinto
  const incrementfather = useCallback(
    (value) => {
      setCounter(  (c) => c +  value )
    },
    [],
  )
  

  // const incrementfather = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <>
      <h1>Callback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementfather} />
    
    </>
  )
}
