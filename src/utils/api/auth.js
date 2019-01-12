import axios from 'axios'

const API = axios.create({ baseURL: process.env.DB_URL })

export const login = credentials => API.post('/auth/login', { ...credentials }).then(res => res.data)


