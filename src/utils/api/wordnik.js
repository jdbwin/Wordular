import axios from 'axios'

const api = 'http://api.wordnik.com/v4/word.json/'

const apiKey = `?api_key=${process.env.WORDNIK_KEY}`

export const getDefinition = word => axios({
   url: `${api}${word}/definitions${apiKey}`,
   method: 'get'
}).catch(() => []);
