import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startLoadingData } from "./store/slices/market/marketSlice"
import { getDataMarket, getDataTiker } from "./store/slices/market/thunks"
import { ResultsPage } from "./pages/ResultsPage"

export const CoinexApp = () => {
  
  const { isLoading , data = []} = useSelector( (state) => state.market )
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(startLoadingData())
  },[])
  
  const onInputChange = () => {
  }

  const onSubmitSearch = ( event) => {
    event.preventDefault()
  }


  return (
    <>
      <div className="container mt-5">
        <h1>CoinEx</h1>
        <hr />

        {  isLoading ? ( 'Cargando...' ): '' }

        <div className="row">
          <div className="col-6">
            <form onSubmit={onSubmitSearch}>
              <input type="text" className="form-control" placeholder="Buscar mercado.." name="search-control" onChange={onInputChange}></input>
              <button className="btn btn-primary mt-2 m-2" type="submit" onClick={ () =>  dispatch(getDataMarket())  } > Ver mercado</button>
              <button className="btn btn-primary mt-2 m-2" type="submit" onClick={ () =>  dispatch(getDataTiker())  } > Buscar Market</button>

            </form>
          </div>
          <div className="col-6">
              {/* Componete que recuperara los datos obtenidos de la api */}
              {
                data.length > 0 ? <ResultsPage data={data} /> : 'Sin Resultados'
              }
          </div>
        
        
        </div>
      </div>
    </>

  )
}
