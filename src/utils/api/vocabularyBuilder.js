import API from './base'

export const getUserWord = () => API.get('/user/vocabulary_builder/get_word').then(res => res.data)

