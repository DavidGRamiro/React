/* eslint-disable no-unused-vars */
import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

  const [counter, setCounter] = useState(initialValue)

  const sumar = ( ) => {
    setCounter(counter + initialValue)
  }

  const restar = ( ) => {
    setCounter( counter - initialValue)
  }

  const reset  = () => {
    setCounter(initialValue)
  }

  return {
    counter, sumar, restar, reset
  }
}