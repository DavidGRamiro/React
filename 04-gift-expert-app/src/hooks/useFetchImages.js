/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";


export const useFetchImages = ( category ) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const images = await getGifts(category);
    setImages(images)
    setIsLoading(false)
  }

  // Solo decimos que queremos que se renderice esto una sola vez.
  useEffect( () => {
    getImages()
  },[])



  return { images, isLoading }






}
