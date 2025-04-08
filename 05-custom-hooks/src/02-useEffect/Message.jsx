import { useEffect } from "react"

export const Message = () => {
  
  useEffect(() => {
    console.log(' Mensaje montado' )
  
    return () => {
      console.log(' Se limpia el mensaje')
    }
  }, [])
  



  return (

    <>
      <h3>Usuario ya existe</h3>
    
    </>

  )

}
