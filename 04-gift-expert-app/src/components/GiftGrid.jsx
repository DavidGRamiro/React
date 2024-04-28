/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { GiftItem } from "./GiftItem";
import { useFetchImages } from "../hooks/useFetchImages";
import PropTypes from 'prop-types'


export const GiftGrid = ({ category }) => {

  const { images, isLoading } =  useFetchImages( category );


  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && <h2>Cargando....</h2>
      }
      <div className="card-grid">
        { 
          images.map( (image) => (
            <GiftItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired
}

