import { useEffect, useState } from "react"
import { fetchApi } from "../helpers/fetchApi"



export const useFetchInfo = (pokemon) => {

  const [info, setInfo] = useState([])

  const getInfo = async() => {
    const resultado = await fetchApi(pokemon)
    setInfo(resultado)
  }

  useEffect(() => {
    if(pokemon !== '' || pokemon !== null){
      getInfo()
    }
  }, [])


  return {
    info
  }
}
