import { fetchApi } from "../helpers/fetchApi"

export const Info = ({ pokemon }) => {

  const { data } = fetchApi(pokemon)





  return (
    <div>Info</div>
  )
}
