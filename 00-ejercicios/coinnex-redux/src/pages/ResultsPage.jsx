
export const ResultsPage = ( { data = []} ) => {
  
  console.log(data)
  return (
    <>
      <h4>Resultados de búsqueda</h4>
      <hr />

      {
        data?.map( (item, index) => (
          
          <>
            <small key={index} > Mercado: { item.market }</small>
            <div className="alert alert-info"> Precio últimas 24 horas.</div>
            { item.base_ccy ? <p>{item.base_ccy}</p> : ''} 
            { item.last ? <p>Ultimo precio: {item.last}</p> : ''}
            { item.high ? <p>Precio más alto: {item.high}</p> : ''}
            { item.low ? <p>Precio más bajo: {item.low}</p> : ''}
          </>
        ))
      }


    </>
  )
}
