import API from './base'

export const saveWord = word => API.post('/user/words', { word },
  {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  }
).then(res => res.data)

