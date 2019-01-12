import axios from 'axios'

const API = axios.create({ baseURL: process.env.DB_URL })

export const createUser = user => API.post('users', { user }).then(res => res.data)

