import API from './base'

export const saveWord = word => API.post('/user/words', { word }).then(res => res.data)

