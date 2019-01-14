import API from './base'

export const getMyWords = () => API.get('/user/my-words').then(res => res.data)

