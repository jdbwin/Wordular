import * as authApi from '../utils/api/auth'

const initialState = {
  isLoggingIn: false
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

    case STORING_TOKEN:
      return {
        ...state,
        isStoringToken: true
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

const STORING_TOKEN = 'auth/STORING_TOKEN'

const STORING_TOKEN_COMPLETED = 'auth/STORING_TOKEN'

export const login = credentials => async dispatch => {
  dispatch({ type: LOGIN_REQUESTED })

  const token = await authApi.login(credentials)

  dispatch({
    type: LOGIN_COMPLETED,
  })

  dispatch(storeToken(token))
}

const storeToken = token => async dispatch => {
  if (!token) return

  dispatch({ type: STORING_TOKEN  })
  await localStorage.setItem('token', token.token)
  dispatch({ type: STORING_TOKEN_COMPLETED  })
}

