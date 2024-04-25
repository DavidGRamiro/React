/* eslint-disable react/prop-types */


export const GiftItem = ( { title, url } ) => {

  return (

    <div className="card">
      <img src={url} alt={title} ></img>
      <p>{title}</p>

    </div>
  
  
  )
}
