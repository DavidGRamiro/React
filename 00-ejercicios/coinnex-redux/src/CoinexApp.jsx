import { useSelector } from "react-redux"

export const CoinexApp = () => {
  
  const { isLoading } = useSelector( (state) => state.market )
  
  const onIputChange = () => {

  }

  const onSubmitSearch = ( event) => {
    event.preventDefault()
  }


  return (
    <>
      <div className="container mt-5">
        <h1>CoinEx</h1>
        <hr />

        {/* {  isLoading ? ( 'Cargando...' ): '' } */}

        <div className="row">
          <div className="col-6">
            <form onSubmit={onSubmitSearch}>
              <input type="text" className="form-control" placeholder="Buscar mercado.." name="search-control" onChange={onInputChange}></input>
              <button className="btn btn-primary mt-2" type="submit"> Buscar</button>
            </form>
          </div>
          <div className="col-6">
              {/* Componete que recuperara los datos obtenidos de la api */}
          </div>
        
        
        </div>
      </div>
    </>

  )
}
