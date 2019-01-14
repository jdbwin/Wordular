import API from './base'

export const createUser = user => API.post('users', { user }).then(res => res.data)

