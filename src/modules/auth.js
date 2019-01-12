import * as authApi from '../utils/api/auth'

const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isStoringToken: false,
  // set token on state reset
  token: localStorage.token
}

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_REQUESTED:
      return {
        ...state,
        isLoggingIn: true
      }

    case LOGIN_COMPLETED:
      return {
        ...state,
        isLoggingIn: false
      }

    case LOGOUT_REQUESTED:
      return {
        ...state,
        isLoggingOut: true
      }

    case LOGOUT_COMPLETED:
      return {
        ...state,
        isLoggingOut: false
      }

    case STORING_TOKEN:
      return {
        ...state,
        isStoringToken: true,
        token: action.token.token
      }

    case STORING_TOKEN_COMPLETED:
      return {
        ...state,
        isStoringToken: false
      }

    default:
      return state

  }
}

const LOGIN_REQUESTED = 'auth/LOGIN_REQUESTED'

const LOGIN_COMPLETED = 'auth/LOGIN_COMPLETED'

const LOGOUT_REQUESTED = 'auth/LOGOUT_REQUESTED'

const LOGOUT_COMPLETED = 'auth/LOGOUT_COMPLETED'

const STORING_TOKEN = 'auth/STORING_TOKEN'

const STORING_TOKEN_COMPLETED = 'auth/STORING_TOKEN_COMPLETED'

export const login = credentials => async dispatch => {
  dispatch({ type: LOGIN_REQUESTED })

  const token = await authApi.login(credentials)

  dispatch({ type: LOGIN_COMPLETED })

  dispatch(storeToken(token))
}

const storeToken = token => async dispatch => {
  if (!token) return

  // set token in redux store state
  dispatch({
    type: STORING_TOKEN,
    token
  })

  // set token in local storage
  await localStorage.setItem('token', token.token)

  dispatch({ type: STORING_TOKEN_COMPLETED })
}

export const logout = () => async dispatch => {
  dispatch({ type: LOGOUT_REQUESTED })

  await localStorage.removeItem('token')

  dispatch({ type: LOGOUT_COMPLETED })
}

