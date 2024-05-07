import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./small"

export const Memorize = () => {


  const { counter, sumar } = useCounter(10)
  const [show, setShow] = useState(true)


  return (

    <>
      <h1>Counter : <Small value={counter}></Small>  </h1>
      <hr />

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
