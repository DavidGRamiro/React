/* eslint-disable react/prop-types */

import { useState } from "react"
import { UserContext } from "./UserContexts"




export const UserProvider = ({ children  }) => {

  const [user, setUser] = useState()


  return (
    <>
      <UserContext.Provider value={{ user, setUser}} >
          { children }
      </UserContext.Provider>
    </>
  )
}
