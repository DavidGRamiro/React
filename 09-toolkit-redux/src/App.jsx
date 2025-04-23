import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment, incrementBy2 } from './store/slices/counter/counterSlice'

function App() {

  // Del state que hemos creado en el archivo store.js, asociado a el counterSlice, lo llamamos. state.prueba, state.pepe etc...
  // De aqui, lo que hacemos es traer el counter, con todas sus propiedades, por que asi lo hemos llamado en el initialState.
  const { counter } = useSelector(( state ) => state.counter)
  const dispatch = useDispatch()


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment()) }>Increment</button>
        <button onClick={() => dispatch(decrement()) } className='buttoncss'>Decrement</button>
        <button onClick={() => dispatch( incrementBy2(2)) }>Decrement by 2</button>

      </div>
    </>
  )
}

export default App
