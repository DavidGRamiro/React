import { coinexAPI } from "../../../api/coinexApi"
import { setMarketData, startLoadingData } from "./marketSlice"


export const getDataMarket = () => {

  return async( dispatch, state) => {
    dispatch(startLoadingData())

    // Recogemos los parametros que nos interesan, en este caso la data de la api.
    const { data  } = await coinexAPI.get('/spot/market')
    dispatch( setMarketData( data ) )
  }
}

export const getDataTiker = ( market ='BTCUSDT' ) => {
  return async( dispatch, state) => {
    dispatch(startLoadingData())

    const { data } = await coinexAPI.get(`/spot/ticker?market=${market}`)
    dispatch(setMarketData(data))

  }
}