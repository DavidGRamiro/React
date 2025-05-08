
import axios from 'axios'

const calendarAPI = axios.create({
  baseURL: 'http://localhost:4000/api'
})

// TODO: Configurar interceptores

export default calendarAPI;