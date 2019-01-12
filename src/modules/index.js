import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import auth from './auth'
import myWords from './myWords'
import users from './users'
import visibility from './visibility'
import wordnik from './wordnik'

export default combineReducers({
  auth,
  form,
  myWords,
  users,
  visibility,
  wordnik
})

