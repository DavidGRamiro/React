import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    // Se dispara cuando entra por aqui en el componente, pero si no borramos 
    // el evento en el return, siempre se ejecuta
    const onMouseMove = ({  x,y }) => {
      const coords = { x, y}
      console.log(coords)
    }
    window.addEventListener( 'mousemove', onMouseMove)

    // Queremos borrar el evento
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
