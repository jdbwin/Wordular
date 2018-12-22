import * as usersApi from '../utils/api/users'

const initialState = {
  isCreating: false,
  isLoggingIn: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_USER_REQUESTED:
      return {
        ...state,
        isCreating: true
      }

    case CREATE_USER_COMPLETED:
      return {
        ...state,
        isCreating: false
      }

    case LOGIN_USER_REQUESTED:
      return {
        ...state,
        isLoggingIn: true
      }

    case LOGIN_USER_COMPLETED:
      return {
        ...state,
        isLoggingIn: false,
        user: action.user
      }

    default:
      return state

  }
}

const CREATE_USER_REQUESTED = 'users/CREATE_USER_REQUESTED'

const CREATE_USER_COMPLETED = 'users/CREATE_USER_COMPLETED'

const LOGIN_USER_REQUESTED = 'users/LOGIN_USER_REQUESTED'

const LOGIN_USER_COMPLETED = 'users/LOGIN_USER_COMPLETED'

export const createUser = user => async dispatch => {
  dispatch({ type: CREATE_USER_REQUESTED})

  await usersApi.createUser(user)

  dispatch({
    type: CREATE_USER_COMPLETED
  })
}

export const loginUser = credentials => async dispatch => {
  dispatch({ type: LOGIN_USER_REQUESTED})

  const user = await usersApi.loginUser(credentials)

  console.log(user)

  dispatch({
    type: LOGIN_USER_COMPLETED,
    user
  })
}

