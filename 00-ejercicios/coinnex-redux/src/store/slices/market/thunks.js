import { coinexAPI } from "../../../api/coinexApi"
import { startLoadingData } from "./marketSlice"


export const getDataMarket = () => {

  return async( dispatch, state) => {
    dispatch(startLoadingData())

    // recogemos los parametros que nos interesan, en este caso la data de la api.
    const { data  } = await coinexAPI.get('/spot/market')

    console.log('Peticion', peticion)


  }


}