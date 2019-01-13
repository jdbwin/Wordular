import axios from 'axios'

const API = axios.create({
  baseURL: process.env.DB_URL
})

export const saveWord = word => API.post('/user/words', { word },
  {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  }
).then(res => res.data)

