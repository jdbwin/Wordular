import axios from 'axios'

const API = axios.create({ baseURL: process.env.DB_URL })

API.interceptors.request.use(config => {
  // add token to all authed requests
  if (config.url.includes('/user/')) {
    config.headers['Authorization'] = localStorage.getItem('token')
  }

  return config
})

API.interceptors.response.use(response => { return response }, error => {
  // remove token if 401 to handle expired tokens
  if (localStorage.getItem('token') && error.request.status === 401) {
    localStorage.removeItem('token')
  }

  return Promise.reject(error)
})

export default API
