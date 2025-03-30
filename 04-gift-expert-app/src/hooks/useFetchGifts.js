import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts"

export const useFetchGifts = (category) => {
  
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const resultado = await getGifts(category)
    setImages(resultado)
    setIsLoading(false)
  }

  useEffect( () => {
    getImages()
  }, [])


  return {
    images: images,
    isLoading: isLoading
  }



}
