import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SimpleForm } from './02 - useEffect/SimpleForm'

// import { CounterApp } from './01 - useState/CounterApp'
// import { CounterAppWhitCustomHook } from './01 - useState/CounterAppWhitCustomHook'
// import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp></CounterApp> */}
    {/* <CounterAppWhitCustomHook></CounterAppWhitCustomHook> */}
    <SimpleForm></SimpleForm>

  </React.StrictMode>,
)
