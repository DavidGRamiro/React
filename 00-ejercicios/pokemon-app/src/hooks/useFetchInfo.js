import { useEffect, useState } from "react"
import { fetchApi } from "../helpers/fetchApi"



export const useFetchInfo = (pokemon) => {

  const [info, setInfo] = useState([])

  const getInfo = async( value) => {
    const resultado = await fetchApi(value)
    setInfo(resultado)
  }

  useEffect(() => {
    getInfo( pokemon )
  }, [pokemon])


  return {
    info
  }
}
