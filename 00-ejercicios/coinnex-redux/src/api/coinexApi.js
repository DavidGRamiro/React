import axios from 'axios'

export const coinexAPI = axios.create({
  baseURL: 'https://api.coinex.com/v2'
})