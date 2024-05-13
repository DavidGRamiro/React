/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

  const [ state, setState  ] = useState({
    data: null,
    isLoading: true,
    hasErrors: false,
    errorMessage : null
  });

  useEffect(() => {
    getFetch()

    // Hacemos que se recarge el componente cuando cambie la URL
  }, [url])
  
  // Siempre disparamos el cargando.
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasErrors: false,
      errorMessage: null
    })
  }

  const getFetch = async() => {
    
    setLoadingState()
    const response = await fetch(url)  
    // Sleep
    await new Promise(resolve => setTimeout(resolve,1500))


    if(!response.ok){
      setState({
        data: null,
        isLoading: false,
        hasErrors: true,
        errorMessage: {
          code : response.code,
          message : response.statusText
        }
      })
      return;
    }
    
    // Si todo ha ido BiquadFilterNode, hacemos petición y catualizamos el estado
    const data = await response.json()
    setState({
      data: data,
      isLoading: false,
      errorMessage: null,
      hasErrors : false
    })
    
  } 



  return {
    data : state.data,
    isLoading : state.isLoading,
    hasErrors : state.hasErrors,
    errorMessage : state.errorMessage
  }
}
