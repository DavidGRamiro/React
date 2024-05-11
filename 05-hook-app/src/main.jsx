import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { TodoApp } from './08 - useReducer/TodoApp'

// import { CallBackHook } from './06 - memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08 - useReducer/intro-reducer'
// import { MemoHook } from './06 - memos/MemoHook'
// import { Memorize } from './06 - memos/Memorize'
// import { Layout } from './05 - useLayoutEffect/Layout'
// import { FocusScreen } from './04 - useRef/FocusScreen'
// import { MultipleCustomHooks } from './03 - examples/MultipleCustomHooks'
// import { SimpleForm } from './02 - useEffect/SimpleForm'
// import { CounterApp } from './01 - useState/CounterApp'
// import { CounterAppWhitCustomHook } from './01 - useState/CounterAppWhitCustomHook'
// import { HooksApp } from './HooksApp'
// import { FormWithCustomHook } from './02 - useEffect/FormWithCustomHook'  
import { MainApp } from './09 - useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <React.StrictMode> */}
      {/* <HooksApp /> */}
      {/* <CounterApp></CounterApp> */}
      {/* <CounterAppWhitCustomHook></CounterAppWhitCustomHook> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormWithCustomHook></FormWithCustomHook> */}
      {/* <MultipleCustomHooks/> */}
      {/* <FocusScreen></FocusScreen> */}
      {/* <Layout></Layout> */}
      {/* <Memorize></Memorize> */}
      {/* <MemoHook></MemoHook> */}
      {/* <CallBackHook></CallBackHook> */}
      {/* <Padre></Padre> */}
      {/* <TodoApp></TodoApp> */}
      
      <MainApp></MainApp>


    {/* </React.StrictMode>, */}
  </BrowserRouter>

)
