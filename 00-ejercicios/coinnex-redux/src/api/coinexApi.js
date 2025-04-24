import axios from 'axios'

export const coinexAPI = axios.create({
  baseURL:'/api/v2'
})