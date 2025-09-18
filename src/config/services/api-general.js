import axios from 'axios'

const apiGeneral = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
  timeout: 8000
})

export default apiGeneral
