import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const HomePage = () => {

  const { user } = useContext(UserContext)

  return (
    <>
      <h1>Home Page</h1>
      <hr />

      <pre>

        {JSON.stringify(user, null, 2)}

      </pre>

    </>

  )
}
