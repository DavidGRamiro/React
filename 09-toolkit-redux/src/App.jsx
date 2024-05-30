import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/CounterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() =>  dispatch(increment())}>Sumar</button>
        <button onClick={() =>  dispatch(decrement())}>Restar</button>
        <button onClick={() =>  dispatch(incrementByAmount(2))}>Sumar 2</button>
      </div>
      El contador vale : { count}
    </>
  )
}

export default App
