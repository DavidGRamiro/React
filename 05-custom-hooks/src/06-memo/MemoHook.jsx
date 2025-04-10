import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStop = (iteractionNumber = 100) => {
  for(let i = 0; i  < iteractionNumber; i++){
    console.log('Ahi vamos')
  }

  return `${ iteractionNumber} numero de procesamientos`
}



export const MemoHook = () => {
  
  
  const { counter, sumar } = useCounter(4000)
  const [show, setShow] = useState(true)
  

  // Implementando el heavyStop, nos damos cuenta que cada vez que le damos a Show/Hide se esta volviendo a redibujar el componente,
  // y por lo tanto esta entrando en la funcion de heavyStop, dandonos por consola el redibujo otra vez de esta función, y para eso,
  // lo que hacemos es usar el hook de memo
  const memorizeValue = useMemo(() => heavyStop(counter), [counter])


  return (

    <>
      <h1>Counter : <small>{counter}</small></h1>
      <hr />

      <h4>{ memorizeValue }</h4>

      <button className="btn btn-primary" onClick={() => sumar(1)}> + 1</button>
      <button className="btn btn-primary" onClick={ () => setShow(!show)}>Show / Hide {JSON.stringify(show)} </button>


    </>
  
  )
}
