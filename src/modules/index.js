import { combineReducers } from 'redux'
import visibility from './visibility'
import wordnik from './wordnik'

export default combineReducers({
  visibility,
  wordnik
})

