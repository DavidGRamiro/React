import { useCounter } from "../hooks/useCounter"

export const CounterAppWhitCustomHook = () => {


  const { counter, sumar, restar, reset } = useCounter()


  return (      
    <>
      <h1>Counter con Hook : { counter }</h1>
      <hr />
      <button className="btn btn-primary" onClick={ () => sumar(5) } > + 1</button>
      <button className="btn btn-primary" onClick={ reset }>Reset</button>
      <button className="btn btn-primary" onClick={ () => restar(5) }> - 1</button>
    </>
  
  
  
  
  )
}
