
import axios from 'axios'

const calendarAPI = axios.create({
  baseURL: 'http://localhost:4000/api'
})


// Interceptores para todas las peticiones que hagamos, incluimos el token 
calendarAPI.interceptors.request.use( config => {

  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }

  return config
})

export default calendarAPI;