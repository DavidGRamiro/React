/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

export const GiftItem = ( { title, url } ) => {

  return (

    <div className="card">
      <img src={url} alt={title} ></img>
      <p>{title}</p>

    </div>
  )
}

GiftItem.PropTypes = {
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired
}
