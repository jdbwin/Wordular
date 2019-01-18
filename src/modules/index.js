import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import auth from './auth'
import home from './home'
import myWords from './myWords'
import search from './search'
import users from './users'
import visibility from './visibility'
import wordnik from './wordnik'

export default combineReducers({
  auth,
  form,
  home,
  myWords,
  search,
  users,
  visibility,
  wordnik
})

