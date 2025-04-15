import { useState } from "react"
import { UserContext } from "./userContext"



export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState({})
  
  return (

    // creamos un provider, y este tendra hijos. Cualquier hijo de nuestro provider, tendrá la información que le estamos mandando.
    <UserContext.Provider value={{ user , setUser}}>
      { children }
    </UserContext.Provider>
  )
}
