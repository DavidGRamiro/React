import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memo/Memorize'
import { MemoHook } from './06-memo/MemoHook'
import { CallBackHook } from './06-memo/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'
import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  // BrowserRouter Es un Hight Order compoennte. Esto hacem que te dentreo de este componente, existan mas componentes, en el que
  // nuestros funcionals components, tengan acceso a el.
  <BrowserRouter>
    <StrictMode>
      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook /> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallBackHook /> */}
      {/* <Padre /> */}  
      {/* <TodoApp /> */}
      <MainApp />
    </StrictMode>
  </BrowserRouter>


)
