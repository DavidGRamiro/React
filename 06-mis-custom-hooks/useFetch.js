import { useEffect, useState } from "react"


const localCache = {}


export const useFetch = (url) => {
  
  const [state, setState] = useState({
    data:  null,
    isLoading: true,
    hasErrors: false,
    error: null
  })
  
  // EN la dependencias, ponemos la URL, por que queremos que cada vez que cambie se realice la peticion http
  useEffect(() => {
    getFetch(url)
  }, [url])
  
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasErrors: false,
      error: null
    })
  }


  const getFetch = async( url ) => {
    
    if(localCache[url]){
      console.log(' Usando caché' )
      setState({
        data: localCache[url],
        isLoading: false,
        hasErrors: false,
        error: null
      })
      return;
    }
    
    setLoadingState();

    const response = await fetch(url)

    // Simulamos que la petición tarda 1 seg y medio en recibir respuesta
    await new Promise(  resolve => setTimeout(resolve, 1500))

    // Si la respuesta no ha sido OK actualizamos el state.
    if (!response.ok){
      setState({
        data: null,
        isLoading: false,
        hasErrors: true,
        error: response.status
      })

      return;
    }
    
    // Si hemos obtenido la data con respuesta OK
    const data = await response.json() 
    setState({
      data : data,
      isLoading: false,
      hasErrors: false,
      error: null
    })

    // Add la data a la caché para no tener que hacer petición i ya la hemos obtenido antes.
    localCache[url] = data

  }
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasErrors: state.hasErrors,
    error: state.error
  }
}
