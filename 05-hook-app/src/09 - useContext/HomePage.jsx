import { useContext } from "react"
import { UserContext } from "./context/UserContexts"

export const HomePage = () => {


  const { user } = useContext(UserContext)

  return (
    <>

      <h1> Bienvenido { user?.name }  </h1>
      <hr />
    </>


  )
}
