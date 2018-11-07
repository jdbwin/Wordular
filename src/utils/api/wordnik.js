import axios from 'axios'

const wordApi = 'http://api.wordnik.com/v4/word.json/'
const wordsApi = 'http://api.wordnik.com/v4/words.json/'

const apiKey = `?api_key=${process.env.WORDNIK_KEY}`

export const getDefinitions = word => axios({
   url: `${wordApi}${word}/definitions${apiKey}`,
   method: 'get'
}).catch(() => []);

export const getRandomWord = () => axios({
   url: `${wordsApi}randomWord${apiKey}`,
   method: 'get'
}).catch(() => []);
