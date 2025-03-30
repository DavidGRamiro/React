import { GiftItem } from "./GiftItem"
import { useFetchGifts } from "../hooks/useFetchGifts"


export const GiftGrid = ({ category}) => {
  // Custom Hook
  const { images, isLoading } = useFetchGifts(category)

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading ?? (<h2>Cargando.....</h2>)
      }
    
      <div className="card-grid">
        { images.map( (image) => (

          <GiftItem key={image.id}
          
          // Si queremos expandir todas las propiedades que nos viene en el image, hacemos lo siguiente.
          // De esta manera, nuestro componente GiftItem, tendra en las props, todos los elementos que tenga image
          { ...image }
          />

        ))}
      </div>


    </>

  )
}
