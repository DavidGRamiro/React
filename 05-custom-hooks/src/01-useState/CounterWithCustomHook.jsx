import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  
  const { counter , sumar, restar, reset} = useCounter()
  

  return (
    <>
      <h1>Counter Whit Custom Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={ () =>  sumar(2) }>+1</button>
      <button className="btn btn-primary" onClick={ reset }>Reset</button>
      <button className="btn btn-primary" onClick={ restar }>-1</button>
    
    </>
  )
}
