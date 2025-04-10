import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const [boxSize, setBoxSize] = useState({ width: 0 , height: 0})

  // Modificación para la explicación de LayoutEffect.
  const h2Ref = useRef()
  useLayoutEffect(() => {
  
  const { height, width} = h2Ref.current.getBoundingClientRect()
  // Con esto podemos obtener el widht del box, y establecer un alto y un ancho, a
  // a traves de un useState para calcular el tamanio

  setBoxSize({ width, height})
  }, [name])


  return (
    <section style={{ height: 200, display: 'flex',  flexDirection: 'row'}}>
      <h2  ref={h2Ref}  className="text-capitalize">#{id} - {name}</h2>

      <img src={sprites[0]}/>
      
    <pre>{ JSON.stringify(boxSize)  }</pre>


    </section>
  )
}
