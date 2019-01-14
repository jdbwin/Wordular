import API from './base'

export const login = credentials => API.post('/auth/login', { ...credentials }).then(res => res.data)

