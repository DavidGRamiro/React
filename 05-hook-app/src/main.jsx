import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './05 - useLayoutEffect/Layout'
// import { FocusScreen } from './04 - useRef/FocusScreen'
// import { MultipleCustomHooks } from './03 - examples/MultipleCustomHooks'
// import { SimpleForm } from './02 - useEffect/SimpleForm'
// import { CounterApp } from './01 - useState/CounterApp'
// import { CounterAppWhitCustomHook } from './01 - useState/CounterAppWhitCustomHook'
// import { HooksApp } from './HooksApp'
// import { FormWithCustomHook } from './02 - useEffect/FormWithCustomHook'  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp></CounterApp> */}
    {/* <CounterAppWhitCustomHook></CounterAppWhitCustomHook> */}
    {/* <SimpleForm></SimpleForm> */}
    {/* <FormWithCustomHook></FormWithCustomHook> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen></FocusScreen> */}
    <Layout></Layout>
  </React.StrictMode>,
)
