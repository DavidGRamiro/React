


export const GiftItem = ({ url, title, id }) => {
  
  return (
    <div className="card">

      <img src={url}  alt={title} />
      <p>{title}</p>

    </div>
  )
}
