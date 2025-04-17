import { useState } from "react"
import { UserContext } from "./userContext"

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({ nombre: 'David', apellidos:'González' })

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        { children }
      </UserContext.Provider>
    </>

  )
}
