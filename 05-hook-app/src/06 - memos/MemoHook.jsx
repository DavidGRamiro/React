/* eslint-disable no-unused-vars */
import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (interacciones = 100) => {
  for( let i = 0; i< interacciones; i++){
    console.log('Lets go')
  }

  return `${ interacciones } Interacciones realizadas`
}


export const MemoHook = () => {


  const { counter, sumar } = useCounter(10)
  const [show, setShow] = useState(true)
  // Se disparara el proceso cuando la dependecia del counter cambie
  const memorizeValue = useMemo( () => heavyStuff(counter), [counter])


  return (

    <>
      <h1>Counter : <small>  {counter}  </small>  </h1>
      <hr />
      <h4>{ memorizeValue }</h4>

      <button className="btn btn-primary"
              onClick={ () => sumar() }>
                +10
      </button>

      
      <button className="btn btn-primary"
              onClick={ () =>  setShow(!show)}>
                Show/Hide
      </button>

    </>

  )
}
