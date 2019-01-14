import axios from 'axios'

const API = axios.create({ baseURL: process.env.DB_URL })

export const getWords = () => API.get('/home').then(res => res.data)

