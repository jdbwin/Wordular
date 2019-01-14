import API from './base'

export const getWords = () => API.get('/home').then(res => res.data)

