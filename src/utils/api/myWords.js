import axios from 'axios'

const API = axios.create({ baseURL: process.env.DB_URL })

export const getMyWords = () => API.get('/words').then(res => res.data)
