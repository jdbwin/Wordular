import { combineReducers } from 'redux'
import visibility from './visibility'
import wordnik from './wordnik'
import myWords from './myWords'

export default combineReducers({
  visibility,
  wordnik,
  myWords
})

