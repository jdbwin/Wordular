import axios from 'axios'

const API = axios.create({ baseURL: process.env.DB_URL })

export const getMyWords = () => API.get(
'/user/my-words',
  {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  }
).then(res => res.data)

