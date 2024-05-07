/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {
  
  
  const [counter, setCounter] = useState(10)
  
  // Sirve para memorizar funciones. El componete que lo llama debe de tener la propiedad memo
  const sumar = useCallback(
    () => {
      console.log('Se ejecuta')
      setCounter((value) => value + 1)
    },
    [],
  )

  
  return (

    <>
      <h1>Use CallBack Hook : { counter}  </h1>
      <hr />


      <ShowIncrement sumar={ sumar }/>
    </>

  )
}
